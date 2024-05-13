import { Component } from '@angular/core';
import { Student } from '../shared/class/aluno.class';
import { School } from '../shared/class/escola.class';
import { StudentService } from '../shared/services/aluno.service';
import { SchoolService } from '../shared/services/escola.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent {
  schools: School[] = [];
  students: Student[] = [];
  student: Student = new Student();
  isLoading = true;
  editing = false;
  visible: boolean = false;
  constructor(private studentService: StudentService, private schoolService: SchoolService) { }

  ngOnInit(): void {
    this.loadStudents();
    this.loadSchools();
  }

  clear(table: Table) {
    table.clear();
  }

  filterTable(event: any, table: Table) {
    table.filterGlobal(event.target.value.trim(), 'contains');
  }
  
  showDialog() {
    this.visible = true;
    this.loadSchools();
  }

  newStudent() {
    this.editing = false;
    this.student = new Student();
    this.showDialog();
  }

  setStudent(student: Student) {
    this.editing = true;
    this.student = student;
    this.showDialog();
  }

  showSchoolStudent(iCodEscola: number) {
    return this.schools.find(e => e.iCodEscola === iCodEscola)?.sDescricao;
  }

  loadStudents(): void {
    this.isLoading = true;
    this.studentService.getStudents().subscribe({
      next: (students) => {
        this.students = students.map(e => {
          return {
            ...e,
            dNascimento: new Date(e?.dNascimento ?? '')
          }
        });
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching students', error);
        this.isLoading = false;
      }
    });
  }

  loadSchools(): void {
    this.isLoading = true;
    this.schoolService.getSchools().subscribe({
      next: (schools) => {
        this.schools = schools;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching students', error);
        this.isLoading = false;
      }
    });
  }

  deleteStudent(id: number): void {
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentService.deleteStudent(id).subscribe({
        next: () => {
          this.loadStudents(); // Recarrega a lista após a exclusão
        },
        error: (error) => {
          console.error('Error deleting student', error);
        }
      });
    }
  }

  addStudent(student: Student): void {
    this.studentService.addStudent(student).subscribe({
      next: () => this.loadStudents(),
      error: (error) => console.error('Error adding student', error)
    });

    this.visible = false;
  }

  updateStudent(student: Student): void {
    this.studentService.updateStudent(student).subscribe({
      next: () => this.loadStudents(),
      error: (error) => console.error('Error updating student', error)
    });

    this.visible = false;
  }
}

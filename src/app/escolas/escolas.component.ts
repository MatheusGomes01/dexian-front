import { Component } from '@angular/core';
import { School } from '../shared/class/escola.class';
import { SchoolService } from '../shared/services/escola.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-escolas',
  templateUrl: './escolas.component.html',
  styleUrls: ['./escolas.component.css']
})
export class EscolasComponent {
  schools: School[] = [];
  school: School = new School();
  isLoading = true;
  editing = false;
  visible: boolean = false;
  constructor(private schoolService: SchoolService) { }

  ngOnInit(): void {
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
  }

  newSchool() {
    this.editing = false;
    this.school = new School();
    this.showDialog();
  }

  setSchool(school: School) {
    this.editing = true;
    this.school = school;
    this.showDialog();
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

  deleteSchool(id: number): void {
    if (confirm('Are you sure you want to delete this school?')) {
      this.schoolService.deleteSchool(id).subscribe({
        next: () => {
          this.loadSchools(); // Recarrega a lista após a exclusão
        },
        error: (error) => {
          console.error('Error deleting school', error);
        }
      });
    }
  }

  addSchool(school: School): void {
    this.schoolService.addSchool(school).subscribe({
      next: () => this.loadSchools(),
      error: (error) => console.error('Error adding school', error)
    });

    this.visible = false;
  }

  updateSchool(school: School): void {
    this.schoolService.updateSchool(school).subscribe({
      next: () => this.loadSchools(),
      error: (error) => console.error('Error updating school', error)
    });

    this.visible = false;
  }
}

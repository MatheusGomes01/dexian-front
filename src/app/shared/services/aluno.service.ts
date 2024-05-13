import { Injectable } from '@angular/core';
import { Student } from '../class/aluno.class';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class StudentService {
    private apiUrl = 'https://localhost:7238/api/Alunos'; // URL da API

    constructor(private http: HttpClient) { }

    getStudents(): Observable<Student[]> {
        return this.http.get<Student[]>(this.apiUrl);
    }

    addStudent(student: Student): Observable<Student> {
        return this.http.post<Student>(this.apiUrl, student);
    }

    updateStudent(student: Student): Observable<Student> {
        return this.http.put<Student>(`${this.apiUrl}/${student.iCodAluno}`, student);
    }

    deleteStudent(id: number): Observable<{}> {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
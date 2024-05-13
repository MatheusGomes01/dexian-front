import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { School } from '../class/escola.class';

@Injectable({
    providedIn: 'root',
})
export class SchoolService {
    private apiUrl = 'https://localhost:7238/api/Escolas'; // URL da API

    constructor(private http: HttpClient) { }

    getSchools(): Observable<School[]> {
        return this.http.get<School[]>(this.apiUrl);
    }

    addSchool(school: School): Observable<School> {
        return this.http.post<School>(this.apiUrl, school);
    }

    updateSchool(school: School): Observable<School> {
        return this.http.put<School>(`${this.apiUrl}/${school.iCodEscola}`, school);
    }

    deleteSchool(id: number): Observable<{}> {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}

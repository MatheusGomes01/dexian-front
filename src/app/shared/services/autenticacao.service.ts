import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(username: string, password: string): boolean {
    console.log('username: ', username)
    console.log('password: ', password)
    return username === 'TESTE' && password === '123';
  }
}
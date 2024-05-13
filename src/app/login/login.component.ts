import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public username: string = '';
  public password: string = '';

  @Output() $login: EventEmitter<any> = new EventEmitter();

  login() {
    console.log('username 1: ', this.username)
    this.$login.emit({ username: this.username, password: this.password });
  }
}

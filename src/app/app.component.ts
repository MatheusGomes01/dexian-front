import { Component } from '@angular/core';
import { AuthService } from './shared/services/autenticacao.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogged: boolean = false;

  constructor(private authService: AuthService, private messageService: MessageService) {

  }

  login(event: any): void {
    this.isLogged = this.authService.login(event.username, event.password);
    if (!this.isLogged) {
      this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: 'Usuário ou senha incorreto' });
    }
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunosComponent } from './alunos/alunos.component';
import { EscolasComponent } from './escolas/escolas.component';

import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { ToastModule } from 'primeng/toast';
import { PasswordModule } from 'primeng/password';

import { HttpClientModule } from '@angular/common/http';
import { CpfPipe } from './shared/pipes/cpf.pipe';
import { LoginComponent } from './login/login.component';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    AlunosComponent,
    EscolasComponent,
    CpfPipe,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TableModule,
    TabViewModule,
    ButtonModule,
    InputTextModule,
    CardModule,
    DialogModule,
    DropdownModule,
    InputMaskModule,
    CalendarModule,
    ToastModule,
    PasswordModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

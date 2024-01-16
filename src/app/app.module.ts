import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddEmpBtnComponent } from './components/add-emp-btn/add-emp-btn.component';
import { ViewBtnComponent } from './components/view-btn/view-btn.component';
import { UpdateBtnComponent } from './components/update-btn/update-btn.component';
import { DeleteBtnComponent } from './components/delete-btn/delete-btn.component';
import { EmpListComponent } from './components/emp-list/emp-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from './components/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [AppComponent, ModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,

    EmpListComponent,
    HeaderComponent,
    FooterComponent,
    AddEmpBtnComponent,
    UpdateBtnComponent,
    ViewBtnComponent,
    DeleteBtnComponent,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

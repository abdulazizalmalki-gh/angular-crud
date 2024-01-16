import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  fName = ''
  lName = ''
  email = ''

  constructor(private apiService: ApiService, public dialogRef: MatDialogRef<ModalComponent>) {}

  submitForm(): void {
    console.log(this.fName + this.lName + this.email)
    this.apiService.addEmployee({fName: this.fName, lName: this.lName, email: this.email})
    this.dialogRef.close();
  }
}

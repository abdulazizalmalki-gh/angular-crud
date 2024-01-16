import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-add-emp-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-emp-btn.component.html',
  styleUrls: ['./add-emp-btn.component.css']
})
export class AddEmpBtnComponent {
  @Output() btnClick = new EventEmitter()

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}

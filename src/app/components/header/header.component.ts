import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmpBtnComponent } from '../add-emp-btn/add-emp-btn.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, AddEmpBtnComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

}

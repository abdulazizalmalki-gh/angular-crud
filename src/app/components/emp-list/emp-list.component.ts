import { Component , OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ApiService } from 'src/app/services/api-service.service';
import { Employee } from 'src/app/types/Employee';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-emp-list',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit{

  constructor(private apiService: ApiService, private http: HttpClient){}

  emps: Employee[] = []

  ngOnInit(): void {
    this.apiService.getEmployees().subscribe((emps) => this.emps= emps)
  }

}

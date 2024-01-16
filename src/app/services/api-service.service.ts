import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Employee } from "src/app/types/Employee";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
};

@Injectable({
  providedIn: "root",
})
export class ApiService {

  private apiUrl = "http://localhost:5001/employees";

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  addEmployee(emp: Employee): Observable<Employee> {
    console.log(emp);
    return this.http.post<Employee>(this.apiUrl, emp, httpOptions);
  }
}

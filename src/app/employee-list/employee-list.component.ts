import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  template: `<h2>Employee-List</h2>
    <ul *ngFor = "let employee of employees">
      <li>{{employee.id}}-{{employee.name}}-{{employee.age}}</li>  
    </ul>
  `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees = [ ]

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() {
     this._employeeService.getEmployees()
        .subscribe(data => this.employees = data);
  }

}

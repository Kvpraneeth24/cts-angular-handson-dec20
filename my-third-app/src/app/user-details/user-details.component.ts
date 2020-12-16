import { Component, OnInit } from '@angular/core';
import { EmployeeService} from '../employee.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent  {

  users : any = [];
  constructor(private _service : EmployeeService){}

  handleClick(){
    this._service.fetchUsers()
    .subscribe(response => this.users = (response));
  }
}

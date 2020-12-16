import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})
export class EmployeeRegisterComponent  {

    id : number = undefined;
    name : string = undefined;
    dob : Date = undefined;

    constructor(private _service : EmployeeService){}

    save(formValues : any){
        this._service.store(formValues);
    }


}

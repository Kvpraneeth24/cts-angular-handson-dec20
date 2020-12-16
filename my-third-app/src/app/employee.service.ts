import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees :any = []; 
  constructor(private _http : HttpClient) { }

  fetchUsers() : Observable <any> {
      let uri ="https://jsonplaceholder.typicode.com/users";
      return this._http.get(uri);
  }

  store(values : any) : any {
    this.employees.push(values);
  }

  dummyDetails() : any{
    return this.employees;
  }
}

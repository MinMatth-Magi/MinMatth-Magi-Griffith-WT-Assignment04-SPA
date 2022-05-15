import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BackendNetworkService {
  constructor(private http: HttpClient) {}

  baseUrl = 'https://localhost:8080/';

  sayHello = () => {
    return this.http.get(this.baseUrl + 'hello');
  };
}

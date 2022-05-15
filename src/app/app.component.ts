import { Component, VERSION } from '@angular/core';
import { BackendNetworkService } from './backend-network.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private backendNetworkService: BackendNetworkService) {}
  name = 'Angular ' + VERSION.major;
  message = '';

  sayHelloToBackend = () => {
    let res = this.backendNetworkService.sayHello();
    console.log(res);
    this.message = 'Backend says hello too';
  };
}

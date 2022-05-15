import { Component } from '@angular/core';
import { BackendNetworkService } from './backend-network.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private backendNetworkService: BackendNetworkService) {}

  pingBackend = () => {
    let res = this.backendNetworkService.pingBackend();
    console.log(res);
  };
}

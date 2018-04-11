import {Component, OnInit} from '@angular/core';
import {HeaderService} from 'common-code-base';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData: any;

  constructor(private headerService: HeaderService) {
  }


  login() {
    this.headerService.userLogin()
      .subscribe((returnData) => {
        this.userData = returnData;
        console.log('this.userData', this.userData);
      });
  }

  ngOnInit() {
  }

}

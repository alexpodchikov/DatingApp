import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerMode = false;
  loginMode = false;

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

  // tslint:disable-next-line: typedef
  registerToggle(){
    this.registerMode = true;
  }

    // tslint:disable-next-line: typedef
    cancelRegisterMode(registerMode: boolean){
      this.registerMode = registerMode;
    }

  // tslint:disable-next-line: typedef
  loginToggle(){
    this.loginMode = true;
  }

    // tslint:disable-next-line: typedef
    cancelLoginMode(registerMode: boolean){
      this.loginMode = registerMode;
    }

}

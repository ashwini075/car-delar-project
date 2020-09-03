import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import{FormBuilder,
  Validators,
  FormGroup,
  FormControl} from '@angular/forms';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  fbFormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
   
  });

  constructor(private router: Router,
    private fb: FormBuilder,
     public http: HttpClient) { }

  ngOnInit(): void {
  }
async registerUser(){
  const data = this.fbFormGroup.value;
  const url='http://localhost:3600/adduser';
  await this.http.get(url,data).toPromise();

  this.fbFormGroup.reset();
}
loginProcess() {
  // after suuccessful ajax call
  sessionStorage.setItem('sid', 'true');
  this.router.navigate(['home']);
}
}

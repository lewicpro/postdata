import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../restapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secure-auth',
  templateUrl: './secure-auth.component.html',
  styleUrls: ['./secure-auth.component.css']
})
export class SecureAuthComponent implements OnInit {
  account="login"
  created;

  constructor(public restapi:RestapiService, public router:Router) { }

  ngOnInit(): void {
  }
  create(){
    this.account="create"
  }
  back(){
    this.account="login"
  }



  username(vle){
    // console.log(vle)
    localStorage.setItem('1', vle)
  }
  email(vle){
    // console.log(vle)
    localStorage.setItem('2', vle)
  }
  password(vle){
    // console.log(vle)
    localStorage.setItem('3', vle)
  }
  password2(vle){
    // console.log(vle)
    localStorage.setItem('4', vle)
  }
  submit(){
    console.log('passed here')
    this.created={
      username:localStorage.getItem('1'),
      email:localStorage.getItem('2'),
      password:localStorage.getItem('3'),
      password2:localStorage.getItem('4')
    }
    this.restapi.getLoginPosts(this.created, 'UserCreate/').then((res)=>{
      this.account="login"

    })


  }
  login(){
    this.created={
      username:localStorage.getItem('1'),
      password:localStorage.getItem('3'),

    }
    this.restapi.getLoginPosts(this.created, 'api/auth/token-auth/').then(results=>{
      this.router.navigate(['dashboard'])
      localStorage.removeItem('1')
      localStorage.removeItem('2')

    })
  }

}

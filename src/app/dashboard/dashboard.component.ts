import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  all;
  userdata;
  paycard='false';

  constructor(public restapi:RestapiService) { 
    this.getdata()
    
  }
  getdata(){
    this.restapi.getnames().then(res=>{
      this.all=res
    })

  }
  display(disp){
    this.paycard="true"
    localStorage.setItem('pk', disp)
  }
  cancel(){
    this.paycard="false";

  }


  name(dat){
    this.userdata={
      name:dat
    }
    this.restapi.getLoginPosts(this.userdata, 'names/').then(res=>{
      this.getdata()
    })
  }
  delete(yp){
   
    this.restapi.deletePost('names/'+yp+'/').then(res=>{
      this.getdata()

    })
    
    
  }
  discountey(moc){
    localStorage.setItem('editedname', moc)

  }
  edit(){
    console.log('waterrrrrr')
    this.userdata={
      name:localStorage.getItem('editedname')
    }
    this.restapi.getLoginPut(this.userdata, 'names/'+localStorage.getItem('pk')+'/').then(res=>{
      this.paycard="false"
      this.getdata()

    })
  

  }

}

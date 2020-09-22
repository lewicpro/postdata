import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {
  company_username =localStorage.getItem('company_username');
  microregisters
  usercreate = 'http://xampesa.pythonanywhere.com/api/wassha/';

  constructor(private http: HttpClient, public route:ActivatedRoute) { }

  getMadukaYote() {

    this.microregisters = 'http://xampesa.pythonanywhere.com/api/Adworker/AllDuka/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getnames() {

    this.microregisters = 'http://xampesa.pythonanywhere.com/api/wassha/names/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
    public deletePost(momo) {
      return new Promise(resolve => {
      
        this.http.delete(this.usercreate + momo).subscribe(data => {
          resolve(data);
        });
    })
    }

    // public putPost(momo) {
    //   return new Promise(resolve => {
      
    //     this.http.put(this.usercreate + momo, '').subscribe(data => {
    //       resolve(data);
    //     });
    // })
    // }

    getLoginPosts(credentials, type) {

      return new Promise((resolve, reject) => {
          const headers = new HttpHeaders();
          this.http.post(this.usercreate + type, credentials, {headers: headers})
          .subscribe(res => {
              resolve(res);
          }, (err) => {
              reject(err);
  
          });
  
      });
  }

    getLoginPut(credentials, type) {

      return new Promise((resolve, reject) => {
          const headers = new HttpHeaders();
          this.http.put(this.usercreate + type, credentials, {headers: headers})
          .subscribe(res => {
              resolve(res);
          }, (err) => {
              reject(err);
  
          });
  
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { throwError } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  url = "http://54.180.24.47:8088/api/user";
  userList = {};
  constructor(public http: HttpClient) {

  }

  ngOnInit(): void {
    //HTTP GET 요청
    this.http.get(this.url)
      /*요청결과를 프로퍼퍼티에 할당한다.
      get메소드는 Observable<Object>를 반환한다.
      이때 타입이 일치하지 않기 때문에 컴파일 에러가 발생할 수 있다.
      아래 코드는 any[]라는 타입을 부여하여 있어서 발생하지 않는다.
      */
      .subscribe((res) => {
        if(res){
          this.userList = res
        }
        console.log(res),
        //요청 실패 처리 콜백 함수(Observer의 error 메소드)
        (error: HttpErrorResponse)=> console.error(error)
      });
  }


}

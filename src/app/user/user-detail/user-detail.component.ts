import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {UserService} from "../../service/user.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})

export class UserDetailComponent implements OnInit {

  user?: User

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    if (Number(this.route.snapshot.paramMap.get('id'))) {
      this.getUser(Number(this.route.snapshot.paramMap.get('id')))
    } else {
      alert('정상적인 접근이 아닙니다.')
      this.goBack()
    }
  }

  getUser(id: Number): void{
    this.userService.getUser(id)
      .subscribe( user => {
        console.log({user})
        this.user = user['data']
      })
  }

  goBack(): void {
    this.location.back()
  }

}

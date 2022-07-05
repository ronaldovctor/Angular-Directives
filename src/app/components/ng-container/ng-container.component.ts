import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.scss']
})
export class NgContainerComponent implements OnInit {
  users = [
    { login: "bob", role: "admin", lastLogin: new Date('2/1/2022')},
    { login: "lia", role: "user", lastLogin: new Date('4/30/2022')},
    { login: "john", role: "admin", lastLogin: new Date('12/23/2022')},
    { login: "robin", role: "user", lastLogin: new Date('8/15/2022')}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent implements OnInit {
  showName!: boolean
  showAddress!: boolean
  showPhone!: boolean
  showAge!: boolean

  constructor() { }

  ngOnInit(): void {
  }

}

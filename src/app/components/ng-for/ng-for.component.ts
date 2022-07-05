import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {
  names: string[] = ['Ana', 'John', 'Mark', 'Ariel']

  cities: {name: string, state: string}[] = [
    { name: "São Paulo", state: "SP" },
    { name: "Porto Alegre", state: "RS" },
    { name: "Curitiba", state: "PR" },
    { name: "Rio de Janeiro", state: "RJ" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

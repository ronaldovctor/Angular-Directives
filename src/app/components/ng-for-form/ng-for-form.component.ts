import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-form',
  templateUrl: './ng-for-form.component.html',
  styleUrls: ['./ng-for-form.component.scss']
})
export class NgForFormComponent implements OnInit {

  name!: string
  address!: string
  phone!: string
  city!: string
  age!:number

  cities: {name: string, state: string}[] = [
    { name: "São Paulo", state: "SP" },
    { name: "Porto Alegre", state: "RS" },
    { name: "Curitiba", state: "PR" },
    { name: "Rio de Janeiro", state: "RJ" },
  ]

  clients: {name: string, address: string, phone: string, city: string, age: number}[] = []

  constructor() { }

  ngOnInit(): void {
  }

  save(): void{
    this.clients.push({
      name: this.name,
      address: this.address,
      phone: this.phone,
      city: this.city,
      age: this.age
    })
    this.cancel()
  }

  cancel(): void {
    this.name = ''
    this.address = ''
    this.phone = ''
    this.city = ''
    this.age = 0
  }

  delete(index: number): void {
    this.clients.splice(index, 1)
  }
}

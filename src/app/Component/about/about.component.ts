import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  subscribeSteps =[
    {id:"01" , step :" choose your plan" , desc :'It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remainin'},
    {id:"02" , step :" create an account" , desc :'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first'},
    {id:"03" , step :" Enjoy Movies" , desc :'It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

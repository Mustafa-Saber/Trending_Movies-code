import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-top-btn',
  templateUrl: './scroll-top-btn.component.html',
  styleUrls: ['./scroll-top-btn.component.css']
})
export class ScrollTopBtnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener ("window : scroll") showBtn (){
    let btn =document.querySelector("#scrollTop");
    let currntScroll =window.scrollY;
    if (currntScroll >701) {
      btn?.classList.add('scrollShow')
    }else {
      btn?.classList.remove("scrollShow")
    }
  }

  scrollTop (){
    window.scrollTo(0 ,0)
  }
}

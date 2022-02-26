import { AuthService } from './../../auth.service';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLogin: boolean = false;
  constructor(public _AuthService: AuthService) {
    console.log(this._AuthService.userData.getValue());
  }

  ngOnInit(): void {
    this._AuthService.userData.subscribe(() => {
      if (this._AuthService.userData.getValue() != null) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    });
  }

  @HostListener('window :scroll') windowScroll() {
    let navBar = document.querySelector('nav');
    let currentScroll = window.pageYOffset;
    if (currentScroll > 200) {
      navBar?.classList.add('navShow');
    } else {
      navBar?.classList.remove('navShow');
    }
  }

  // @HostListener("window:scroll")  navShow() {
  //   let navBar = document.querySelector("nav")
  //   let currentScrollPos = window.pageYOffset;
  //   if (currentScrollPos >500) {
  //     navBar?.classList.add("position-fixed")
  //   } else {
  //     navBar?.classList.remove("position-fixed")
  //   }
  // }

  navActive(event: any) {
    let nav = Array.from(document.querySelectorAll('.nav-component li a'));
    let navbarShow =Array.from( document.querySelectorAll('#navbarSupportedContent '));
console.log(navbarShow)
navbarShow[0].classList.remove('show');

    for (let i = 0; i < nav.length; i++) {
      nav[i].classList.remove('active');
      event.target.classList.add('active');
      window.scrollTo(0, 0);
    }

    // console.log(1)
    // let navLinks = document.querySelectorAll(".nav-component .nav-link")
    // console.log(navLinks);

    // for (let i = 0; i < navLinks.length; i++) { navLinks[i].classList.remove("active") }
    // event.target.classList.add("active")
    // window.scrollTo(0, 0)
    // console.log(event);
  }
}

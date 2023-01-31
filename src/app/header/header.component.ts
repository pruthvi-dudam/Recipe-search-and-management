import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isShow: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  routeToSR() {
    this.router.navigate(['app/saved']);
  }

  routeToSL() {
    this.router.navigate(['app/shopping-list']);
  }

  routeToLogin() {
    this.router.navigate(['app/login']);
  }

  routeToHome() {
    this.router.navigate(['app/home']);
  }

  routeToAU() {
    this.router.navigate(['app/about-us']);
  }

  showIcon() {
    this.isShow != this.isShow;
  }
}

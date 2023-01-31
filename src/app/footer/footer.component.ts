import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  routeToSR() {
    this.router.navigate(['app/saved']);
  }

  routeToSL() {
    this.router.navigate(['app/shopping-list']);
  }

  routeToAU() {
    this.router.navigate(['app/about-us']);
  }

  routeToLogin() {
    this.router.navigate(['app/login']);
  }
}

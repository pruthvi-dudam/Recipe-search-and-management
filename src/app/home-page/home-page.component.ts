import { Component, Input, OnInit } from '@angular/core';
import { ApicallService } from '../services/apicall.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  username: string = '';

  cuisineList: string[] = [
    'African',
    'American',
    'British',
    'Cajun',
    'Caribbean',
    'Chinese',
    'Eastern European',
    'European',
    'French',
    'German',
    'Greek',
    'Indian',
    'Irish',
    'Italian',
    'Japanese',
    'Jewish',
    'Korean',
    'Latin American',
    'Mediterranean',
    'Mexican',
    'Middle Eastern',
    'Southern',
    'Spanish',
    'Thai',
    'Vietnamese',
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(sessionStorage);
    for (var i = 0; i < sessionStorage.length; i++) {
      if (sessionStorage.key(i) == 'user') {
        this.username =
          'Welcome back ' + sessionStorage.getItem(sessionStorage.key(i));
      } else if (sessionStorage.key(i) == 'newUser') {
        this.username =
          'Welcome to Heavenly Bite, ' +
          sessionStorage.getItem(sessionStorage.key(i));
      }
    }
  }

  onClickCuisine(cusine: String) {
    this.router.navigate(['app/recipes/' + cusine]);
  }
}

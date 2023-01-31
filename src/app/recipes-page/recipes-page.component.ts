import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { ApicallService } from '../services/apicall.service';
import { ServicesComponent } from '../services/services.component';
@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: [
    './recipes-page.component.scss',
    '../home-page/home-page.component.scss',
  ],
})
export class RecipesPageComponent implements OnInit {
  cuisine: string;
  diet: string = '';
  query: string = '';
  title: string = '';
  //
  recipeList: any[];
  // savedRecipeList: string[] = [];
  savedRecipeList = new Map<string, string>();

  //
  isTopRecipe: boolean = false;
  //
  dietList: string[] = [
    'Gluten Free',
    'Ketogenic',
    'Vegetarian',
    'Lacto-Vegetarian',
    'Ovo-Vegetaria',
    'Vegan',
    'Pescetarian',
    'Paleo',
    'Primal',
    'Whole30',
  ];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private apiService: ApicallService,
    private shared: ServicesComponent
  ) {
    this.cuisine = this.router.url.substring(13);
  }

  ngOnInit(): void {
    this.goBackToTop();
    this.shared.setValue(this.savedRecipeList);
  }

  getDietRecipes(diet: string) {
    console.log('in diet');

    this.isTopRecipe = true;
    this.diet = diet;
    this.title = '' + this.cuisine + ' recipes with ' + this.diet + ' diet';

    if (this.query.length > 0) {
      //this.isQueryRecipe = false;
      this.getQueryAndDietRecipes();
    } else {
      this.apiService
        .getRecipesDiet(this.cuisine.toLowerCase(), diet.toLowerCase())
        .subscribe(
          (list: any) => {
            this.recipeList = list.results;
          },
          (err) => console.error(err),
          () => console.log(this.recipeList)
        );
    }
  }

  getQueryRecipes() {
    this.isTopRecipe = true;

    console.log('in query');

    this.title = '' + this.cuisine + ' recipes with ' + this.query + ' !';
    if (this.diet.length > 0) {
      this.getQueryAndDietRecipes();
    } else {
      this.apiService
        .getRecipesQuery(this.cuisine.toLowerCase(), this.query.toLowerCase())
        .subscribe(
          (list: any) => {
            this.recipeList = list.results;
          },
          (err) => {
            console.error(err);
          },
          () => console.log(this.recipeList)
        );
    }
  }

  getQueryAndDietRecipes() {
    this.isTopRecipe = true;

    this.title =
      '' +
      this.cuisine +
      ' recipes with ' +
      this.query +
      ' - ' +
      this.diet +
      ' diet';

    console.log('in query&diet');

    this.apiService
      .getRecipesQueryAndDiet(
        this.cuisine.toLowerCase(),
        this.query.toLowerCase(),
        this.diet.toLowerCase()
      )
      .subscribe(
        (list: any) => {
          this.recipeList = list.results;
        },
        (err) => {
          console.error(err);
        },
        () => console.log(this.recipeList)
      );
  }

  goBackToTop() {
    this.isTopRecipe = false;

    this.title = 'Explore top ' + this.cuisine + ' recipes';
    this.apiService.getRecipes(this.cuisine.toLowerCase()).subscribe(
      (list: any) => {
        this.recipeList = list.results;
      },
      (err) => console.error(err),
      () => console.log(this.recipeList)
    );
  }

  // addToSavedRecipes(title: string, imgSrc: string) {
  //   sessionStorage.setItem(title, imgSrc);
  //   this.savedRecipeList.set(title, imgSrc);
  //   console.log(this.savedRecipeList);
  // }
}

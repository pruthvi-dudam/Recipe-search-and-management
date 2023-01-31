import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Type } from 'typescript';
import { ApicallService } from '../services/apicall.service';

@Component({
  selector: 'app-recipe-information-page',
  templateUrl: './recipe-information-page.component.html',

  styleUrls: [
    './recipe-information-page.component.scss',
    '../recipes-page/recipes-page.component.scss',
  ],
})
export class RecipeInformationPageComponent implements OnInit {
  id: string = '';
  cuisine: string = '';
  infoList: any[] = [];
  title: string = '';
  dishes: string = '';
  likes: string = '';
  summary: string;
  imgSrc: string = '';
  time: string = '';
  servings: string = '';
  ingredientList: any[] = [];
  totalCost: string = '';
  totalCostPerServing: string = '';
  instructionList: any[] = [];
  tasteList: any[] = [];
  nutritionList: any[] = [];
  nutritionImgSrc: string = '';
  similarList: any[] = [];
  similarListImg: string[] = [];
  //
  shoppingList: string[] = [];

  constructor(private router: Router, private apiService: ApicallService) {}

  ngOnInit(): void {
    this.id = this.router.url.substring(this.router.url.lastIndexOf('/') + 1);
    this.cuisine = this.router.url.substring(
      13,
      this.router.url.lastIndexOf('/')
    );

    this.getRecipeInfo(this.id);
    this.getRecipeSummary(this.id);
    this.getIngridents(this.id);
    this.getInstructions(this.id);
    this.getTastes(this.id);
    this.getNutrition(this.id);
    this.getNutritionImg(this.id);
    this.getSimilarRecipes(this.id);
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  getRecipeInfo(id: string) {
    this.apiService.getInfo(id).subscribe(
      (list: any) => {
        this.imgSrc = list.image;
        this.title = list.title;
        this.infoList = list;
        this.dishes = list.dishTypes.toString().split(',').join(', ');
        this.likes = list.aggregateLikes;
        this.time = list.readyInMinutes;
        this.servings = list.servings;
      },
      (err) => console.error(err)
      //() => console.log(this.infoList)
    );
  }

  getRecipeSummary(id: string) {
    this.apiService.getInfosummary(id).subscribe(
      (list: any) => {
        this.summary = this.makeSummary(list.summary);
        //console.log(this.summary);
      },
      (err) => console.error(err),
      () => console.log()
    );
  }

  makeSummary(summary: string): string {
    let div = '<div>' + summary + '</div>';
    return div;
  }

  getIngridents(id: string) {
    this.apiService.getIngridients(id).subscribe(
      (list: any) => {
        this.ingredientList = list.ingredients;
        this.totalCost = list.totalCost;
        this.totalCostPerServing = list.totalCostPerServing;
      },
      (err) => console.error(err),
      () => console.log(this.ingredientList)
    );
  }

  getInstructions(id: string) {
    console.log(id);
    this.apiService.getInstructions(id).subscribe(
      (list: any) => {
        console.log(list[0].steps);
        this.instructionList = list[0].steps;
      },
      (err) => console.error(err),
      () => console.log(this.ingredientList)
    );
  }

  isMinutes(value: object | undefined): boolean {
    return value === undefined;
  }

  getTastes(id: string) {
    console.log(id);
    this.apiService.getTastes(id).subscribe(
      (list: any) => {
        console.log(list);
        this.tasteList = list;
      },
      (err) => console.error(err),
      () => console.log()
    );
  }

  getNutrition(id: string) {
    console.log(id);
    this.apiService.getNutrition(id).subscribe(
      (list: any) => {
        this.nutritionList = this.checkNutrition(list);
        console.log(this.nutritionList);
      },
      (err) => console.error(err),
      () => console.log()
    );
  }

  checkNutrition(list: any): any {
    // console.log(list);
    let counter: number = 0;
    for (const [key] of Object.entries(list)) {
      //console.log(key.toString());
      counter++;
      if (counter > 4) {
        delete list[key];
      }
    }
    //console.log(list);
    return list;
  }

  getNutritionImg(id: string) {
    id = '22347';
    console.log(id);
    this.apiService.getNutritionImg(id).subscribe(
      (list: any) => {
        console.log(list);
        this.nutritionImgSrc = this.makeImg(list);
      },
      (err) => console.error(err),
      () => console.log()
    );
  }

  makeImg(img: string): string {
    let div = '<div>' + img + '</div>';
    return div;
  }

  getSimilarRecipes(id: string) {
    this.apiService.getSimilarRecipes(id).subscribe(
      (list: any) => {
        console.log(list);
        this.similarList = list;
        this.getSimilarRecipesImg(list);
      },
      (err) => console.error(err),
      () => console.log(this.similarList)
    );
  }

  getSimilarRecipesImg(list) {
    let i: number;
    for (i = 0; i < list.length; i++) {
      this.apiService.getInfo(list[i].id).subscribe(
        (list: any) => {
          this.similarListImg.push(list.image);
        },
        (err) => console.error(err)
      );
    }
    console.log(this.similarList);
  }

  addToShoppingList() {
    console.log(this.id);
    let obj = {
      t: this.title,
      i: this.imgSrc,
      ingredient: this.ingredientList,
      tc: this.totalCost,
      tcs: this.totalCostPerServing,
    };
    console.log(obj);
    sessionStorage.setItem('id:' + this.id, JSON.stringify(obj));
    this.shoppingList.push(this.id);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApicallService {
  constructor(private readonly http: HttpClient) {}
  //api1key = 0cef2320fde3415e9f4c05a44c175b8b; // pruthvi
  //api2key = 05c9f01ba967407b8415b1c5165e3bee; //shrav

  getRecipes(cusine: String): Observable<any> {
    return this.http.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=05c9f01ba967407b8415b1c5165e3bee&cuisine=${cusine}`
    );
  }

  getRecipesDiet(cusine: String, diet: String): Observable<any> {
    return this.http.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=0cef2320fde3415e9f4c05a44c175b8b&cuisine=${cusine}&diet=${diet}`
    );
  }

  getRecipesQuery(cusine: String, query: String): Observable<any> {
    return this.http.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=0cef2320fde3415e9f4c05a44c175b8b&query=${query}&cuisine=${cusine}`
    );
  }

  getRecipesQueryAndDiet(
    cusine: String,
    query: String,
    diet: string
  ): Observable<any> {
    return this.http.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=0cef2320fde3415e9f4c05a44c175b8b&query=${query}&cuisine=${cusine}&diet=${diet}`
    );
  }

  getInfo(id: String): Observable<any> {
    return this.http.get(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=05c9f01ba967407b8415b1c5165e3bee`
    );
  }

  getInfosummary(id: String): Observable<any> {
    return this.http.get(
      `https://api.spoonacular.com/recipes/${id}/summary?apiKey=0cef2320fde3415e9f4c05a44c175b8b`
    );
  }

  getIngridients(id: String): Observable<any> {
    return this.http.get(
      `https://api.spoonacular.com/recipes/${id}/priceBreakdownWidget.json?apiKey=0cef2320fde3415e9f4c05a44c175b8b`
    );
  }

  getInstructions(id: String): Observable<any> {
    return this.http.get(
      `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=05c9f01ba967407b8415b1c5165e3bee&stepBreakdown=true`
    );
  }

  getTastes(id: string): Observable<any> {
    return this.http.get(
      `https://api.spoonacular.com/recipes/${id}/tasteWidget.json?apiKey=05c9f01ba967407b8415b1c5165e3bee`
    );
  }

  getNutrition(id: string): Observable<any> {
    return this.http.get(
      `https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=05c9f01ba967407b8415b1c5165e3bee`
    );
  }

  getNutritionImg(id: string): Observable<any> {
    return this.http.get(
      `https://api.spoonacular.com/food/products/${id}/nutritionLabel?apiKey=05c9f01ba967407b8415b1c5165e3bee`,
      { responseType: 'text' }
    );
  }

  getSimilarRecipes(id: string): Observable<any> {
    return this.http.get(
      `https://api.spoonacular.com/recipes/${id}/similar?apiKey=05c9f01ba967407b8415b1c5165e3bee`
    );
  }
}

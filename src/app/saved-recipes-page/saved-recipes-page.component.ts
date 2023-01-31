import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesComponent } from '../services/services.component';

@Component({
  selector: 'app-saved-recipes-page',
  templateUrl: './saved-recipes-page.component.html',
  styleUrls: ['./saved-recipes-page.component.scss'],
})
export class SavedRecipesPageComponent implements OnInit {
  savedRecipesList = new Map<string, string>();

  constructor(private shared: ServicesComponent, private router: Router) {}

  ngOnInit(): void {
    for (var i = 0; i < sessionStorage.length; i++) {
      if (
        sessionStorage.key(i).substring(0, 3) == 'id:' ||
        sessionStorage.key(i) == 'newUser' ||
        sessionStorage.key(i) == 'user'
      ) {
      } else {
        this.savedRecipesList.set(
          sessionStorage.key(i),
          sessionStorage.getItem(sessionStorage.key(i))
        );
      }
    }
    //this.savedRecipesList = this.shared.getValue();
    //console.log(this.savedRecipesList);
    console.log(localStorage);
  }

  getRecipe(id: string) {
    this.router.navigate(['app/recipes/' + id]);
  }

  getDeletedRecipe(title: string) {
    sessionStorage.removeItem(title);
    this.savedRecipesList.delete(title);
    console.log(this.savedRecipesList);
  }
}

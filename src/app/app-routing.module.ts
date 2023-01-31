import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsPageModule } from './about-us-page/about-us-page.module';
import { HomePageModule } from './home-page/home-page.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginPageModule } from './login-page/login-page.module';
import { RecipeInformationPageModule } from './recipe-information-page/recipe-information-page.module';
import { RecipesPageModule } from './recipes-page/recipes-page.module';

import { SavedRecipesPageModule } from './saved-recipes-page/saved-recipes-page.module';
import { ShoppingListPageModule } from './shopping-list-page/shopping-list-page.modue';

const routes: Routes = [
  { path: '', redirectTo: 'app/login', pathMatch: 'full' },
  { path: '**', component: LoginPageComponent },
];

@NgModule({
  declarations: [],
  imports: [
    LoginPageModule,
    HomePageModule,
    RecipesPageModule,
    FormsModule,
    SavedRecipesPageModule,
    RecipeInformationPageModule,
    ShoppingListPageModule,
    AboutUsPageModule,

    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

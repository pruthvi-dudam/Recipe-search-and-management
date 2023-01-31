import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageModule } from './login-page/login-page.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipeCardComponent } from './shared/recipe-card/recipe-card.component';
import { RecipesPageModule } from './recipes-page/recipes-page.module';
import { SavedRecipesPageComponent } from './saved-recipes-page/saved-recipes-page.component';
import { SavedRecipesPageModule } from './saved-recipes-page/saved-recipes-page.module';
import { SharedModule } from './shared/shared-module';
import { RecipeInformationPageComponent } from './recipe-information-page/recipe-information-page.component';
import { ShoppingListPageComponent } from './shopping-list-page/shopping-list-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginPageModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private readonly router: Router) {
    this.router = router;
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared-module';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipesPageComponent } from './recipes-page.component';
import { HomePageModule } from '../home-page/home-page.module';
import { RecipeInformationPageModule } from '../recipe-information-page/recipe-information-page.module';

@NgModule({
  declarations: [RecipesPageComponent],
  providers: [],
  exports: [RecipesPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'app/recipes/:id',
        component: RecipesPageComponent,
      },
    ]),
    HeaderModule,
    FooterModule,
  ],
})
export class RecipesPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared-module';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageModule } from '../home-page/home-page.module';
import { SavedRecipesPageComponent } from './saved-recipes-page.component';
import { RecipesPageModule } from '../recipes-page/recipes-page.module';

@NgModule({
  declarations: [SavedRecipesPageComponent],
  providers: [],
  exports: [SavedRecipesPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'app/saved',
        component: SavedRecipesPageComponent,
      },
    ]),
    HeaderModule,
    FooterModule,
    RecipesPageModule,
  ],
})
export class SavedRecipesPageModule {}

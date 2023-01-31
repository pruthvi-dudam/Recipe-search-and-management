import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared-module';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageModule } from '../home-page/home-page.module';
import { RecipeInformationPageModule } from '../recipe-information-page/recipe-information-page.module';
import { ShoppingListPageComponent } from './shopping-list-page.component';

@NgModule({
  declarations: [ShoppingListPageComponent],
  providers: [],
  exports: [ShoppingListPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'app/shopping-list',
        component: ShoppingListPageComponent,
      },
    ]),
    HeaderModule,
    FooterModule,
    RecipeInformationPageModule,
  ],
})
export class ShoppingListPageModule {}

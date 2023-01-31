import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared-module';
import { HomePageComponent } from './home-page.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesPageModule } from '../recipes-page/recipes-page.module';

@NgModule({
  declarations: [HomePageComponent],
  providers: [],
  exports: [HomePageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: 'app/home',
        component: HomePageComponent,
      },
    ]),
    HeaderModule,
    FooterModule,
    RecipesPageModule,
  ],
})
export class HomePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared-module';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageModule } from '../home-page/home-page.module';
import { RecipesPageModule } from '../recipes-page/recipes-page.module';
import { AboutUsPageComponent } from './about-us-page.component';

@NgModule({
  declarations: [AboutUsPageComponent],
  providers: [],
  exports: [AboutUsPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'app/about-us',
        component: AboutUsPageComponent,
      },
    ]),
    HeaderModule,
    FooterModule,
  ],
})
export class AboutUsPageModule {}

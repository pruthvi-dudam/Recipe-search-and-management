import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorMessagesComponent } from './form-error-messages/form-error-messages.component';
import { RouterModule } from '@angular/router';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';

@NgModule({
  declarations: [FormErrorMessagesComponent, RecipeCardComponent],
  imports: [CommonModule, RouterModule],
  exports: [FormErrorMessagesComponent, RecipeCardComponent],
})
export class SharedModule {}

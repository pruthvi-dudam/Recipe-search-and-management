import { Component, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  savedRecipes = new Map<string, string>();
  isRecipeBtn: boolean;
  isDeleteBtn: boolean;

  constructor() {}

  setValue(data: Map<string, string>) {
    this.savedRecipes = data;
  }

  setRecipeBtn(isRecipeBtn: boolean) {
    this.isRecipeBtn = isRecipeBtn;
  }

  setDeleteBtn(isDeleteBtn: boolean) {
    this.isDeleteBtn = isDeleteBtn;
  }

  getValue() {
    return this.savedRecipes;
  }

  getRecipeBtn() {
    return this.isRecipeBtn;
  }

  getDeleteBtn() {
    return this.isDeleteBtn;
  }

  ngOnInit(): void {}
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent implements OnInit {
  @Input() imgSrc: string;
  @Input() title: string;
  @Output() savedRecipe = new EventEmitter<string>();
  @Input() isRecipe: boolean;
  @Input() isDelete: boolean;
  @Output() deletedRecipe = new EventEmitter<string>();
  @Output() sendID = new EventEmitter<string>();
  @Output() sendTitle = new EventEmitter<string>();

  isClicked: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClickSaved(title: string, img: string) {
    sessionStorage.setItem(title, img);
    //console.log('HIII');
    //this.savedRecipe.emit(event);
    this.isClicked = !this.isClicked;
  }

  deleteRecipe(event: string) {
    console.log(event);
    this.deletedRecipe.emit(event);
  }

  getRecipe(id: string) {
    this.sendID.emit(this.imgSrc.substring(37, this.imgSrc.length - 12));
    this.sendTitle.emit(this.title);
    this.router.navigate([
      'app/recipes/id/' + id.substring(37, this.imgSrc.length - 12),
    ]);
  }
}

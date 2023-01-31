import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedRecipesPageComponent } from './saved-recipes-page.component';

describe('SavedRecipesPageComponent', () => {
  let component: SavedRecipesPageComponent;
  let fixture: ComponentFixture<SavedRecipesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedRecipesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedRecipesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

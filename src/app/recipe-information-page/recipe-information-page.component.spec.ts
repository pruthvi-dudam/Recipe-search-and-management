import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeInformationPageComponent } from './recipe-information-page.component';

describe('RecipeInformationPageComponent', () => {
  let component: RecipeInformationPageComponent;
  let fixture: ComponentFixture<RecipeInformationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeInformationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeInformationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

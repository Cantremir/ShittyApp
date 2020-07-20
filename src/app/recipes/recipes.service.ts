import { Injectable } from '@angular/core';
import { recipesCollection } from './recipe-db';
import { Recipe } from './recipe.model';
@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  titleToken: string;
  private recipes: Recipe[] = recipesCollection;
  constructor() { }

  getAllRecipes(): Recipe[] {
    return [...this.recipes];
  }
  getRecipe(recipeId: string): Recipe {
    return {
      ...this.recipes.find(r => {
        return recipeId === r.id;
      })
    };
  }
  setTitleLengthPx(passAlong: string) {
    this.titleToken = passAlong;
  }
  getTitleLengthPx() {
    console.log('service' + this.titleToken);
    return this.titleToken;
  }
  deleteRecipe(recId: string) {
    this.recipes = this.recipes.filter(r => {
      return r.id !== recId;
    });
  }
}

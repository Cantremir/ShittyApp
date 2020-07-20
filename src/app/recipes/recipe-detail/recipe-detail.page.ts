import { Component, OnInit, Input, AfterContentChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit, AfterContentChecked {
  requestedId: string;
  fetchedRecipe: Recipe;
  token: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeServ: RecipesService
  ) { }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(p => {
      if (!p.has('id')) {
        // redirect
        return;
      }
      this.requestedId = p.get('id');
      this.fetchedRecipe = this.recipeServ.getRecipe(this.requestedId);
    });

  }
  ngAfterContentChecked() {
    console.log('recipe details page ' + this.recipeServ.getTitleLengthPx());
    this.token = this.recipeServ.getTitleLengthPx();
  }
}

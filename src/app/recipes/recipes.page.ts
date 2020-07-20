import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { RecipesService } from './recipes.service';
import { Recipe } from './recipe.model';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[];
  title: string;


  constructor(
    private recipeServ: RecipesService,
    private alertCtrler: AlertController) { }

  ngOnInit() {
    this.recipes = this.recipeServ.getAllRecipes();
  }



  setTitle(input: string) {
    const titleLength = input.length * 9;
    const titleToken = '-' + titleLength.toString() + 'px';
    this.recipeServ.setTitleLengthPx(titleToken);
    console.log('set in recipes page ' + titleToken);
  }

  async deleteRecipe(recId: string) {
    console.log('suka');
    const alert = await this.alertCtrler.create({
      cssClass: 'delete-alert alert-wrapper',
      header: 'For real?',
      message: 'You sure u wanna delete that?',
      buttons: [{
        text: 'Nah',
        role: 'cancel',
        // handler: () => { return; }
      },
      {
        text: 'Yeh',
        handler: () => {
          this.recipeServ.deleteRecipe(recId);
          this.recipes = this.recipeServ.getAllRecipes();
        }
      }]
    });
    await alert.present();
  }
}

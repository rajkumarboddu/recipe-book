import { Component } from '@angular/core';

import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
	selector : 'app-recipes',
	templateUrl : './recipes.component.html',
	providers: [RecipeService]
})

export class RecipesComponent {
	selectedRecipe: Recipe;

	constructor(private recipeService: RecipeService){ }

	ngOnInit(){
		this.recipeService.selectedRecipe.subscribe(
			(recipe: Recipe) => {
				this.selectedRecipe = recipe;
			}
		)
	}
}
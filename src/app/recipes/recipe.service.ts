import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
	selectedRecipe = new EventEmitter<Recipe>();

	private recipes: Recipe[] = [
		new Recipe(
		'Palak Paneer' , 
		'Palak Paneer is a quintessential North Indian vegetarian dish', 
		'http://www.manjulaskitchen.com/blog/wp-content/uploads/palak_paneer_2016.jpg')
	];
	
	getRecipes(){
		return this.recipes.slice();
	}
}
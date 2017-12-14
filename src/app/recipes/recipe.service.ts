import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {

	private recipes: Recipe[] = [
		new Recipe(
		'Palak Paneer' ,
		'Palak Paneer is a North Indian vegetarian dish',
		'http://www.manjulaskitchen.com/blog/wp-content/uploads/palak_paneer_2016.jpg',
		[
			new Ingredient('Palak', 10),
			new Ingredient('Paneer', 1)
		]),
		new Recipe(
		'Pot Biryani' ,
		'Pot Biryani is one of the most famous biryani',
		'http://www.tomatomenu.com/wp-content/uploads/2016/08/biryanipotimg.jpg',
		[
			new Ingredient('Chicken', 2),
			new Ingredient('Basmati Rice', 1)
		]),
	];

	constructor(private slService: ShoppingListService) {}

	getRecipes(){
		return this.recipes.slice();
	}

  getRecipe(index: number){
	  return this.recipes.slice()[index];
  }

	addIngredientsToShoppingList(ingredients: Ingredient[]){
		this.slService.addIngredients(ingredients);
	}
}

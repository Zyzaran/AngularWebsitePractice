import {Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipeSelected = new Subject<Recipe>();

  private recipes: Recipe[] = [

      new Recipe('Suspicious Sushi',
      "Are you sure that\'s real fish?",
      'https://cdn.pixabay.com/photo/2017/03/01/19/35/sushi-2109438_1280.jpg',
      [
        new Ingredient('Salmon', 3),
        new Ingredient('Rice', 1),
        new Ingredient('Seaweed', 3),
        new Ingredient('Sesame seeds', 1),
        new Ingredient('Cucumber', 1) ,
        new Ingredient('Soy Sauce', 1),
        new Ingredient('Tofu', 1)
      ]),
      new Recipe('Dave\'s Homemade Green Curry',
      "Not really a curry.",
      'https://p0.pikist.com/photos/654/327/green-curry-thai-food-thai-ingredient.jpg',
      [
        new Ingredient('Garlic', 1),
        new Ingredient('Green Chilies', 50),
        new Ingredient('Onion', 1),
        new Ingredient('Spices', 1),
        new Ingredient('Chicken', 2),
        new Ingredient('Basil', 2) 
      ]),
      new Recipe('Chicken Tikka Masala',
      "Expensive, and spicy.",
      'https://www.foodista.com/sites/default/files/2617919931_9f0240c033_z.jpg',
      [
        new Ingredient('Spices', 1),
        new Ingredient('Coconut Milk', 1),
        new Ingredient('Chicken', 1),
        new Ingredient('Tomato', 5),
        new Ingredient('Onion', 1) ,
        new Ingredient('Cilantro', 1)
      ]),
      new Recipe('Turkey Club',
      "I asked for more turkey! The linecook doesn\'t care.",
      'https://live.staticflickr.com/187/414858233_d29ef6b299_b.jpg', 
      [
        new Ingredient('Bun', 1),
        new Ingredient('Lettuce', 1),
        new Ingredient('Turkey', 1),
        new Ingredient('Tomato', 1),
        new Ingredient('Cheese', 2) 
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}

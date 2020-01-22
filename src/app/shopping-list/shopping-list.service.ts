import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {


  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredient: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Onions', 15),
  ];

  getIngredients() {
    return this.ingredient.slice();//return copy of the recipes array

  }
  addIngredient(ingredient: Ingredient) {
    this.ingredient.push(ingredient);
    this.ingredientsChanged.emit(this.ingredient.slice());
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredient.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredient.slice());
  }

}

import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('ingredientNameInput') ingredientNameInput: ElementRef;
  @ViewChild('ingredientAmountInput') ingredientAmountInput: ElementRef;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  addIngredient(){
    const name = this.ingredientNameInput.nativeElement.value;
    const amount = this.ingredientAmountInput.nativeElement.value;
    const newIngredient = new Ingredient(name, amount);
    this.slService.addIngredient(newIngredient);
  }

}

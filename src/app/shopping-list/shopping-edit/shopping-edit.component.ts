import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode: boolean = false;
  editedItemIndex: number;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.editingIngredient.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        const ingredient: Ingredient = this.slService.getIngredient(index);
        this.slForm.setValue({
          name: ingredient.name,
          amount: ingredient.amount
        });
      }
    )
  }

  onAddOrUpdateItem(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode) {
      this.slService.updateIngredient(this.editedItemIndex, newIngredient);
    } else{
      this.slService.addIngredient(newIngredient);
    }
    this.editMode = false;
    this.slForm.reset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

}

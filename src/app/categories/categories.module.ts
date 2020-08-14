import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from '../categories/categories.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { FilterTexboxComponent } from './filter-texbox/filter-texbox.component';
import { CategoriesRoutingModule } from './categories-routing.module';


@NgModule({
  declarations: [
    CategoriesComponent,
    CategoriesListComponent,
    FilterTexboxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CategoriesRoutingModule
  ],
  exports:[ CategoriesComponent ]
})

export class CategoriesModule {
    
 }

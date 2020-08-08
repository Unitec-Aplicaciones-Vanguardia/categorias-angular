import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories : Category[];

  constructor() { }

  ngOnInit(): void {
    this.categories = [
      {description: "a", id: 1, total: 5},
      {description: "b", id: 2, total: 25},
      {description: "c", id: 3, total: 15},
      {description: "d", id: 4, total: 5},
      {description: "e", id: 5, total: 35}
    ]
  }

}

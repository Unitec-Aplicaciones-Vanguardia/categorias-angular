import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/category';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories : Category[];

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.dataService.getCategories()
      .subscribe(
        (data: Category[]) => this.categories = data
      );
  }

}

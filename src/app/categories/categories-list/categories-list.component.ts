import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/shared/category';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  private _categories:  Category[]  = [];
  filteredCategories : Category[];
  total : number;

  @Input() get categories() : Category[]{
    return this._categories;
  }

  set categories(value : Category[]){
    if(value){
      this.filteredCategories = this._categories = value;
      this.calculateTotal();
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

  calculateTotal () {
    this.total = 0;
    this.filteredCategories.forEach((element : Category) => {
      this.total += element.total;
    });
  }

  filter(data : string){
    if(data){
       this.filteredCategories = this.categories.filter((category: Category) => {
          return category.description.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
          category.total.toString().indexOf(data) > -1;
       });
    }else{
      this.filteredCategories = this.categories;
    }
    this.calculateTotal();
  }

}

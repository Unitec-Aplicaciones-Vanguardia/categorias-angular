import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : Product[];
  
  constructor(private route : ActivatedRoute, private dataService : DataService) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getProducts(id)
      .subscribe(
        (products : Product[]) => this.products = products
      )
  }

}

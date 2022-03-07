import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsAPIService } from 'src/app/Services/products-api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  catList: ICategory[];
  newPrd: IProduct={} as IProduct;

  constructor(private prdAPIService: ProductsAPIService
            , private router: Router) {
    this.catList=[
      {id:1, name: 'Mobiles'},
      {id:2, name: 'Tablets'},
      {id:3, name: 'Laptops'},
    ];
  }

  ngOnInit(): void {
  }

  InsertProduct()
  {
    // let testPrd:IProduct={
    //   id:10,
    //   name:'Mobile From API',
    //   price: 100,
    //   quantity:10,
    //   imgURL:'',
    //   catID:3
    // };

    this.prdAPIService.addProduct(this.newPrd).subscribe({
      next:(prd)=>{
        this.router.navigate(['/Products']);
      },
      error: (err)=>{
        alert("Error Occured");
      }
    })
  }

}

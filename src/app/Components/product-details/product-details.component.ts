import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  prd: IProduct | undefined = undefined;
  prdIDList: number[] = [];
  currPrdID: number = 0;
  private currIndex: number = 0;
  constructor(private activatedRoute: ActivatedRoute
    , private location: Location
    , private router: Router
    , private prdService: ProductService) { }

  ngOnInit(): void {
    this.prdIDList = this.prdService.getPrdIDList();
    // this.currPrdID = (this.activatedRoute.snapshot.paramMap.get('pid'))? Number(this.activatedRoute.snapshot.paramMap.get('pid')): 0;

    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.currPrdID = (paramMap.get('pid')) ? Number(this.activatedRoute.snapshot.paramMap.get('pid')) : 0;
      // console.log(sentPrdID);
      let foundPrd = this.prdService.getProductByID(this.currPrdID);
      if (foundPrd) {
        this.prd = foundPrd;
      }
      else {
        alert("Invalid product");
        this.location.back();
      }
    });

  }

  goBack() {
    this.location.back();
  }

  goPrevious() {
    this.currIndex = this.prdIDList.findIndex(item => item == this.currPrdID)
    this.router.navigate(['/Products', this.prdIDList[--this.currIndex]]);
  }

  goNext() {
    this.currIndex = this.prdIDList.findIndex(item => item == this.currPrdID)
    this.router.navigate(['/Products', this.prdIDList[++this.currIndex]]);
  }

  searchProduct(prdName: string) {
    let foundPrd = this.prdService.searchProductByName(prdName);

    if (foundPrd) {
      this.prd = foundPrd;
    }
    else {
      alert("Not found");
    }
  }

}



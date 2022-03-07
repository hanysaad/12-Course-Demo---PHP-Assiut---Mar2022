import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  prd: IProduct | undefined = undefined;
  prdIDList: number[] = [];
  currPrdID: number = 0;
  private currIndex: number = 0;

  // private subscriptionList: Subscription[]=[];
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

    // let subsc=this.activatedRoute.paramMap.subscribe({
    //   next:(paramMap)=>{
    //     this.currPrdID = (paramMap.get('pid')) ? Number(this.activatedRoute.snapshot.paramMap.get('pid')) : 0;
    //   },
    //   error: (err)=>{
    //     console.log(err);
    //   },
    //   complete: ()=>{}
    // });

    // this.subscriptionList.push(subsc);
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
    // for (let sub of this.subscriptionList)
    // {
    //   sub.unsubscribe();
    // }
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



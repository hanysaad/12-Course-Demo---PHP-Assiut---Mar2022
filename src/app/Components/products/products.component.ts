import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';
import { ProductsAPIService } from 'src/app/Services/products-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
  // , providers:[ProductService]
})
export class ProductsComponent implements OnInit, OnChanges{
  todayDate: Date = new Date();
  prdListOfCat: IProduct[]=[];
  orderTotalPrice:number=0;

  @Input() receivedCatID:number=0;
  @Output() totalPriceChanged: EventEmitter<number>;
  // private prdService: ProductService;
  constructor(private prdService:ProductService
            , private prdAPIService: ProductsAPIService
            , private router: Router) {
    // this.prdService=prdService;
    this.totalPriceChanged= new EventEmitter<number>();
   }
  ngOnChanges(): void {
    // this.getProductsOfCat();
    // this.prdListOfCat=this.prdService.getProductsByCatID(this.receivedCatID);
    this.prdAPIService.getProductsByCatID(this.receivedCatID)
                      .subscribe(prdList=>{
                        this.prdListOfCat=prdList;
                      });
  }

  ngOnInit(): void {
    // this.prdListOfCat=this.prdService.getProductsByCatID(this.receivedCatID);
    this.prdAPIService.getAllProducts().subscribe(prdList=>{
      this.prdListOfCat=prdList;
    });
  }

  trackByProd(index: number, item: IProduct)
  {
    return item.id;
  }

  // private getProductsOfCat()
  // {
  //   if (this.receivedCatID==0)
  //   {
  //     this.prdListOfCat = Array.from(this.prdList);
  //     return;
  //   }
  //   this.prdListOfCat=this.prdList.filter(
  //     (prd)=> prd.catID==this.receivedCatID
  //     );
  // };

  updateTotalPrice(prdPrice:number, itemsCount:any)
  {
    // this.orderTotalPrice+= (prdPrice * itemsCount);
    // this.orderTotalPrice+= (prdPrice * parseInt(itemsCount));
    // this.orderTotalPrice+= (prdPrice * Number(itemsCount));
    // this.orderTotalPrice+= (prdPrice * itemsCount as number);
    this.orderTotalPrice+= (prdPrice * +itemsCount);
    this.totalPriceChanged.emit(this.orderTotalPrice);
  }

  openProductDetails(prdID: number)
  {
    this.router.navigate(['Products',prdID]);
  }
}

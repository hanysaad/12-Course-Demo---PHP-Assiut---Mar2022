import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.css']
})
export class OrderMasterComponent implements OnInit, AfterViewInit {
  catList: ICategory[];
  selectedCatID:number=0;
  receivedOrderTotalPrice: number=0;

  // @ViewChild('clientName') clientNameInpElem:ElementRef|null=null;
  // @ViewChild('clientName') clientNameInpElem:ElementRef|undefined=undefined;
  // @ViewChild('clientName') clientNameInpElem?:ElementRef;
  // @ViewChild('clientName') clientNameInpElem:ElementRef = {} as ElementRef;
  // non-null assertion operator
  @ViewChild('clientName') clientNameInpElem!:ElementRef;
  @ViewChild(ProductsComponent) productsCompRef!:ProductsComponent;
  constructor() {

    this.catList=[
      {id:1, name: 'Mobiles'},
      {id:2, name: 'Tablets'},
      {id:3, name: 'Laptops'},
    ];
   }


  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    //if (this.clientNameInpElem)
      this.clientNameInpElem.nativeElement.value="Value from TS...";
      console.log(this.productsCompRef.prdListOfCat);
  }

  onTotalPriceChanged(totalPrice: number)
  {
    this.receivedOrderTotalPrice= totalPrice;
  }

  // getNewPrdArr()
  // {
  //   console.log(this.productsCompRef.prdListOfCat);
  // }

}

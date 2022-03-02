import { Component, OnInit } from '@angular/core';
import { StoreInfo } from 'src/app/Models/store-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  storeInfo: StoreInfo ={name: 'ITI Store'
                      , coverImgURL:'https://fakeimg.pl/250x100/'
                      , branches: ["Cairo", "Assiut", "Mansoura", "Alex", "Sohag", "Menia"],
                    };

  showImg:boolean = true;
  customerFeedback:string="good";

  constructor() { }

  ngOnInit(): void {
  }

  toggleImg()
  {
    this.showImg=!this.showImg;
  }

}

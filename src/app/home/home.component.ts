import { Component, OnInit } from '@angular/core';
import { ApiServiseService } from '../service/api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  baseUri = this.api.API_URL;
  products: any;
  content1 = [
    { name: "Shirts", imageuri: 'Shirts', key: 'shirt' },
    { name: "T Shirts", imageuri: 'Tshirts', key: 'tshirt' },
    { name: "Shorts", imageuri: 'Shorts', key: 'short' },
    { name: "Trousers", imageuri: 'Trousers', key: 'trouser' },
  ]

  constructor(private api: ApiServiseService) { }

  ngOnInit(): void {
    this.getAllProducts("");
  }

  //get all products
  getAllProducts(key: any){
    this.api.getresponse("get", `product?key=${key}`, {})
    .subscribe(res => {
      this.products = res.data;

    },
      err => {
      }
      

    )
  }


  // convwet promotation %
  showPromoPresentage(item: any) {
    let temp = (item.product_price - item.product_promo_price) / item.product_price * 100
    return temp.toFixed(0)
  }

}

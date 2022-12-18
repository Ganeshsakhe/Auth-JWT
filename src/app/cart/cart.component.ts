import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
public product:any=[];
public grandTotal !:number;
  products: any;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      console.log(res)
      this.product=res;
      this.grandTotal=this.cartService.getTotalPrice();
    })
  }
  removeItem(item:any){
    this.cartService.removeCartItem(item);

  }
  emptycart()
  {
    this.cartService.removeAllCart();
  }
}
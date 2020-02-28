import { Component, OnInit } from '@angular/core';
import { EmartService } from '../../emart.service';
import { Bill } from '../../bill';
import { Item } from '../../item';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {
  bills: Bill[];
  
  cartItems: Item[];
  buyerName: string = 'John';
  buyerId: string = '101';
  buyerDate: string = '20/11/2019';
  buyerContact: string = 'ashwitha@gmail.com';
  amount: number = 0;
  constructor(protected emartService: EmartService) { }

  ngOnInit(): void {
    this.bills = this.emartService.getAllBills();
  }

}

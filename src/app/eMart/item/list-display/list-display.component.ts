import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { __param } from 'tslib';
import { EmartService } from '../../emart.service';
import { Item } from '../../item';

@Component({
  selector: 'app-list-display',
  templateUrl: './list-display.component.html',
  styleUrls: ['./list-display.component.css']
})
export class ListDisplayComponent implements OnInit {
  item: Item;
 

  constructor(protected activatedRoute: ActivatedRoute,
              protected emartService: EmartService,
              protected router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
                                            (param)=>{
                                                        let id = param.get('iId');
                                                        this.item = this.emartService.getItem(id);
                                                      }
                                          );
  }
  addToCart(itemId: number){
    this.emartService.addToCart(itemId);
    this.router.navigate(['item-list']);
  }
}

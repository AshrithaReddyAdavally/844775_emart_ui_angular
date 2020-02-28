import { Component, OnInit } from '@angular/core';
import { Item } from '../../item';
import { EmartService } from '../../emart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  allitems: Item[];
  EmartService: any;
  constructor(protected emart: EmartService,
              protected router: Router) { }

  ngOnInit(): void {
    this.allitems=this.emart.getAllItems();
  }
  displayItemDetails(itemId: number){
    this.router.navigate(['/item-display/'+itemId]);
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  //Paginator Inputs
  length = 200;
  pageSize = 20;
  pageSizeOptions: number[] = [5,10,25,100];
  // MatPaginator Output

  constructor(
    
  ) { }

  ngOnInit(

  ): void {
  }

}

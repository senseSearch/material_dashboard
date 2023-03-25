import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-card',
  templateUrl: './mi-card.component.html',
  styleUrls: ['./mi-card.component.scss']
})
export class MiCardComponent implements OnInit {

  screenWidth: boolean = false;

  smallWidthScreen(): boolean{
    //this.screenWidth = (960 < (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth));
    return ((window.screen.width || window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) < 960);
  }

  msg(){
    alert('make clicked');
  }
  
  constructor() { }
  ngOnInit(): void {
    
  }

}

import { Component, ElementRef, AfterViewInit, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-direccion-cliente',
  templateUrl: './direccion-cliente.component.html',
  styleUrls: ['./direccion-cliente.component.css']
})
export class DireccionClienteComponent implements AfterViewInit {

  @ViewChild('d1') d1!: ElementRef;
  @ViewChild('d2') d2!: ElementRef;
  @ViewChild('d3') d3!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    this.d1.nativeElement.value = "";
  }

  ngOnInit(): void { 
  }

  public scrollTod1(){
    this.d1.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }

  public scrollTod2(){
    this.d2.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }

  public scrollTod3(){
    this.d3.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
}

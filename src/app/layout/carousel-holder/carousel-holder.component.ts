import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel-holder',
  templateUrl: './carousel-holder.component.html',
  styleUrls: ['./carousel-holder.component.css']
})
export class CarouselHolderComponent implements OnInit {

  constructor() { }
  slides = [
    {
      id: 1,
      src : '../assets/img/clients/client-1.png',
      alt: 'client 1',
      title: 'client 1'
    },
    {
      id: 2,
      src : '../assets/img/clients/client-2.png',
      alt: 'client 2',
      title: 'client 2'
    },
    {
      id: 3,
      src : '../assets/img/clients/client-3.png',
      alt: 'client 3',
      title: 'client 3'
    },
    {
      id: 4,
      src : '../assets/img/clients/client-4.png',
      alt: 'client 4',
      title: 'client 4'
    }];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: [ '<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right></i>"' ],
    autoplay: true,
    freeDrag: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }


  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Language } from 'src/app/config/language';
import { Router } from '@angular/router';
@Component({
  selector: 'app-carousel-holder',
  templateUrl: './carousel-holder.component.html',
  styleUrls: ['./carousel-holder.component.css']
})
export class CarouselHolderComponent implements OnInit {

  constructor(private router: Router ,private lang: Language) { }
  sliderItems = [
    {
      id: '1',
      src : '../assets/images/projects/AL GALALA MOUNTAIN.png',
      alt: 'AL GALALA MOUNTAIN',
      title: 'AL GALALA MOUNTAIN'
    },
    {
      id: '2',
      src : '../assets/images/projects/CATHEDRAL OF NATIVITY.png',
      alt: 'CATHEDRAL OF NATIVITY',
      title: 'CATHEDRAL OF NATIVITY'
    },
    {
      id: '3',
      src : '../assets/images/projects/EL ORONFIL HOUSING.png',
      alt: 'EL ORONFIL HOUSING',
      title: 'EL ORONFIL HOUSING'
    },
    {
      id: '4',
      src : '../assets/images/projects/NEW ALAMIN CITY.png',
      alt: 'NEW ALAMIN CITY',
      title: 'NEW ALAMIN CITY'
    },
    {
      id: '5',
      src : '../assets/images/projects/NEW CAIRO HOUSING.png',
      alt: 'NEW CAIRO HOUSING',
      title: 'NEW CAIRO HOUSING'
    },
    {
      id: '6',
      src : '../assets/images/projects/NEW DAMIETTA HOUSING.png',
      alt: 'NEW DAMIETTA HOUSING',
      title: 'NEW DAMIETTA HOUSING'
    },
    {
      id: '7',
      src : '../assets/images/projects/NEW MANSOURA HOUSING.png',
      alt: 'NEW MANSOURA HOUSING',
      title: 'NEW MANSOURA HOUSING'
    }
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoplay:true,
    navSpeed: 700,
    navText: ['',''],
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  }


  ngOnInit() {
  }
  get isDetails(){
    return this.router.url.indexOf('product-details') >= 0; 
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Language } from 'src/app/config/language';
@Component({
  selector: 'app-carousel-slick-holder',
  templateUrl: './carousel-slick-holder.component.html',
  styleUrls: ['./carousel-slick-holder.component.css']
})
export class CarouselSlickHolderComponent implements OnInit {

  constructor(private router: Router, private lang: Language,) { }
  sliderItems = [
    {
      src : '../assets/images/projects/AL GALALA MOUNTAIN.png',
      alt: 'AL GALALA MOUNTAIN',
      title: 'AL GALALA MOUNTAIN'
    },
    {
      src : '../assets/images/projects/CATHEDRAL OF NATIVITY.png',
      alt: 'CATHEDRAL OF NATIVITY',
      title: 'CATHEDRAL OF NATIVITY'
    },
    {
      src : '../assets/images/projects/EL ORONFIL HOUSING.png',
      alt: 'EL ORONFIL HOUSING',
      title: 'EL ORONFIL HOUSING'
    },
    {
      src : '../assets/images/projects/NEW ALAMIN CITY.png',
      alt: 'NEW ALAMIN CITY',
      title: 'NEW ALAMIN CITY'
    },
    {
      src : '../assets/images/projects/NEW CAIRO HOUSING.png',
      alt: 'NEW CAIRO HOUSING',
      title: 'NEW CAIRO HOUSING'
    },
    {
      src : '../assets/images/projects/NEW DAMIETTA HOUSING.png',
      alt: 'NEW DAMIETTA HOUSING',
      title: 'NEW DAMIETTA HOUSING'
    },
    {
      src : '../assets/images/projects/NEW MANSOURA HOUSING.png',
      alt: 'NEW MANSOURA HOUSING',
      title: 'NEW MANSOURA HOUSING'
    }
  ];

  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": -1,
    "dots": true,
    "centerMode": true,
    "focusOnSelect": true,
    "arrows":false,
    "autoplay": true,
    rtl: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          "slidesToShow": 1,
          "slidesToScroll": 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
    
  };
  removeSlide() {
    this.sliderItems.length = this.sliderItems.length - 1;
  }
  
  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  }

  ngOnInit() {
  }
  get isDetails(){
    return this.router.url.indexOf('product-details') >= 0; 
  }

}

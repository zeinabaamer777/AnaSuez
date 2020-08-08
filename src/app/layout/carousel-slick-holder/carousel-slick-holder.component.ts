import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-slick-holder',
  templateUrl: './carousel-slick-holder.component.html',
  styleUrls: ['./carousel-slick-holder.component.css']
})
export class CarouselSlickHolderComponent implements OnInit {

  constructor() { }
  sliderItems = [
    {
      src : '../assets/img/clients/client-1.png',
      alt: 'client 1',
      title: 'client 1'
    },
    {
      src : '../assets/img/clients/client-2.png',
      alt: 'client 2',
      title: 'client 2'
    },
    {
      src : '../assets/img/clients/client-3.png',
      alt: 'client 3',
      title: 'client 3'
    },
    {
      src : '../assets/img/clients/client-4.png',
      alt: 'client 4',
      title: 'client 4'
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

}

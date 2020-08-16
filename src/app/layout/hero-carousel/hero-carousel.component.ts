import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hero-carousel',
  templateUrl: './hero-carousel.component.html',
  styleUrls: ['./hero-carousel.component.css']
})
export class HeroCarouselComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 6000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.showNavigationIndicators = false
  }
  Images = ['../assets/images/carousel-2.png', '../assets/images/carousel-3.jpg'];  
  SlideOptions = { items: 1, dots: true, nav: true };  
  CarouselOptions = { items: 2, dots: true, nav: true };  

  ngOnInit() {
  }

}

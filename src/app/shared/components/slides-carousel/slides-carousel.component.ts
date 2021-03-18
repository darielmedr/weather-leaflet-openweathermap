import { Component, Input, OnInit } from '@angular/core';
import CarouselSlide from 'src/app/shared/models/carousel-slide';

@Component({
  selector: 'app-slides-carousel',
  templateUrl: './slides-carousel.component.html',
  styleUrls: ['./slides-carousel.component.css']
})
export class SlidesCarouselComponent implements OnInit {
  @Input() slides: Array<CarouselSlide> = [];
  @Input() slidesHeight: string;

  constructor() {
    this.slidesHeight = "100%";
  }

  ngOnInit(): void {
  }

}

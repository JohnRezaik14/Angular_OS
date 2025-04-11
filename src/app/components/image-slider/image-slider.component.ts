import { Component } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  imports: [],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css',
})
export class ImageSliderComponent {
  images = [
    '/images/01.jpg',
    '/images/02.jpg',
    '/images/03.jpg',
    '/images/04.jpg',
  ];
  interval = setInterval(() => {});
  index = 0;
  imageSrc = this.images[this.index];
  next() {
    if (this.index < this.images.length - 1) {
      this.index++;
    } else {
      this.index = 0;
    }
    this.imageSrc = this.images[this.index];
  }
  prev() {
    if (this.index - 1 < 0) {
      this.index = this.images.length - 1;
    } else {
      this.index--;
    }
    this.imageSrc = this.images[this.index];
  }
  slide() {
    this.interval = setInterval(() => this.next(), 500);
  }
  stop() {
    clearInterval(this.interval);
  }
}

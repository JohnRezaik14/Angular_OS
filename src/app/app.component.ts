import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { TextInputComponent } from './components/text-input/text-input.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';

@Component({
  selector: 'app-root',
  imports: [TextInputComponent,ImageSliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NG_Image_slider';
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  imports: [FormsModule],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.css'
})
export class TextInputComponent {
usrName="";
resetName(){
  console.log("reset");
this.usrName="";
}
}

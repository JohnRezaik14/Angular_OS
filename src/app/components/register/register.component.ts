import { Component, EventEmitter, Output } from '@angular/core';
import { IStudent } from '../../models/student.model';
// import { CommonModule } from '@angular/common';//for structural directive *ngIf, *ngFor, ngClass
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  student: IStudent = { name: '', age: 16 };
  @Output() sendStudent = new EventEmitter();
  clicked: Boolean = false;
  isNameCharsValid(name: String): boolean {
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(name.trim());
  }

  registerStudent() {
    this.clicked = true;
    if (
      this.student.name.trim().length > 3 &&
      this.student.age > 14 &&
      this.student.age < 31
    ) {
      // console.log(this.student);
      this.sendStudent.emit({ ...this.student });
    }
  }
}

import { Component } from '@angular/core';
import { RegisterComponent } from '../../register/register.component';
import { StudentsComponent } from '../../students/students.component';
import { IStudent } from '../../../models/student.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// FormsModule, CommonModule,/
@Component({
  selector: 'app-home',
  imports: [RegisterComponent, StudentsComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  studentsFromRegister: IStudent[] = [];
  // choosedLab: number = 3;
  // chooseLab(n: number) {
  //   this.choosedLab = n;
  // }
  receiveStudentData(e: any) {
    console.log(e);
    this.studentsFromRegister.push(e);
    console.log(this.studentsFromRegister);
  }
}

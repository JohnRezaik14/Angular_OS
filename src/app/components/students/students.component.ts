import { Component, Input } from '@angular/core';
import { IStudent } from '../../models/student.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-students',
  imports: [CommonModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
})
export class StudentsComponent {
  @Input() students: IStudent[] = [];
}

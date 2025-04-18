import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css'],
  imports: [RouterLink, RouterLinkActive],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { SearchComponent } from '../../components/Search/Search.component';
@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css'],
  imports: [RouterOutlet, RouterLink, RouterLinkActive, SearchComponent],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

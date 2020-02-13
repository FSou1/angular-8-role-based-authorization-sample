import { Component, OnInit } from '@angular/core';
import { Role } from '../models/role';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Role = Role;

  constructor() { }

  ngOnInit() {
  }

}

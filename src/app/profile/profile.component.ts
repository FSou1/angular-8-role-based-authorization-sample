import { Component, OnInit } from '@angular/core';
import { Role } from '../models/role';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  Role = Role;

  constructor() { }

  ngOnInit() {
  }

}
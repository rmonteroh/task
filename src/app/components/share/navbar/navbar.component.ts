import { Component, OnInit } from '@angular/core';
import { RequesterService } from '../../../services/requester.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private rq: RequesterService, private router: Router) { }

  ngOnInit() {
  }

  isLoggdIn(){
    return this.rq.loggedIn();
  }
  logout() {
    this.rq.logout();
    this.router.navigate(['/login']);
  }
}

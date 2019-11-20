import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { RequesterService } from '../../services/requester.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public rq: RequesterService,
    private router: Router
  ) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }
  saveData() {
    const body = {
      name: this.myForm.get('name').value,
      password: this.myForm.get('password').value,
    };
    sessionStorage.setItem('user', body.name);
    this.router.navigate(['/home']);
  }

}

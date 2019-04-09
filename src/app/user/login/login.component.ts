import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { TOASTR_TOKEN, Toastr } from 'src/app/common/toastr.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName;
  password;
  mouseoverLogin;
  constructor(private authService: AuthService,
              private router: Router,
              @Inject(TOASTR_TOKEN) private toastrService: Toastr) { }

  ngOnInit() {
  }

  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password)
      .subscribe(resp => {
        if (resp) {
          this.router.navigate(['/events']);
        } else {
          this.toastrService.error('Incorrect Login');
        }
      });
  }

}

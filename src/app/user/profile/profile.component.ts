import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { TOASTR_TOKEN, Toastr } from 'src/app/common/toastr.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;

  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: Toastr) { }

  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, [Validators.required]);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  cancel() {
    this.router.navigate(['/events']);
  }
  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.updateProfile(formValues.firstName, formValues.lastName);
      // this.router.navigate(['/events']);
      this.toastr.success('Awesome Job');
    }
  }

   // get firstNameControl() { return this.firstName; }
   // get lastNameControl() { return this.lastName; }

  validFirstName(): boolean {
    return this.firstName.valid || this.firstName.untouched;
  }
  validLastName(): boolean {
    return this.lastName.valid || this.lastName.untouched;
  }


}

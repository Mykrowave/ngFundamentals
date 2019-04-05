import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required]);
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
      this.router.navigate(['/events']);
    }
  }

  // get firstName() { return this.profileForm.get('firstName'); }
  // get lastName() { return this.profileForm.get('lastName'); }

  validFirstName(): boolean {
    return this.firstName.valid || this.firstName.untouched;
  }
  validLastName(): boolean {
    return this.lastName.valid || this.lastName.untouched;
  }
}

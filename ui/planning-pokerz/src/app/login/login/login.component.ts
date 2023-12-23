import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faGoogle, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { AuthService } from '../../services/auth.service';
import { SessionInformationService } from '../../services/session-information.service';
import { IUser } from '../../types/user.interface';

@Component({
  selector: 'sc-login',
  standalone: true,
  imports: [MatCardModule, FontAwesomeModule, MatSnackBarModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginFormGroup: UntypedFormGroup ;
  public isError = false;

  githubIcon = faGithub;
  googleIcon = faGoogle;
  microsoftIcon = faMicrosoft;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private authService: AuthService,
    private sessionInformationService: SessionInformationService,
    private snackBar: MatSnackBar
  ) {
  }
  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void {
    // console.log(this.loginFormGroup.get('userName').value);
    // console.log(this.loginFormGroup.get('password').value);
    // this.loginService.User = {
    //   email: this.loginFormGroup.get('userName').value,
    //   id: 1
    // };

    this.snackBar.open('Welcome to Scrum Cermony', '', { duration: 2000 });
    this.router.navigate(['/home']);
  }
  onSubmit(): void {
    // To be Implemented

  }

  loginWithGoogle(): void {
    this.authService.googleSignin()
      .then((data) => {
        this.snackBar.open('Welcome to Scrum Cermony', '', { duration: 2000 });
        this.setUserSessionData(data);
        this.router.navigate(['/home']);
      })
      .catch(err => {
        this.snackBar.open(`Error Connectiing to your google account.`, '', { duration: 2000 });
        console.log(`error => ${err}`);
      });
  }
  loginWithGithub(): void {
    this.authService.githubSignin()
      .then((data) => {
        this.setUserSessionData(data);
        this.router.navigate(['/home']);
      })
      .catch(err => {
        this.snackBar.open(`Error Connectiing to your GitHub account.`, '', { duration: 2000 });
        console.log(`error => ${err}`);
      });
  }

  loginWithMS(): void {
    this.authService.microsoftSignin()
      .then((data) => {
        this.setUserSessionData(data);
        this.router.navigate(['/home']);
      });
  }

  setUserSessionData(data: any): void {
    const userObject: IUser = {
      displayName: data.user.displayName,
      email: data.user.email,
      photoURL: data.user.photoURL,
      uid: data.user.uid,
    };
    this.sessionInformationService.setUserInformation = userObject;

  }
}

import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LocalStorageService} from '../../../../core/services/local-storage/local-storage.service';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthService} from '../../services/auth-service/auth.service';
import {ToastrService} from 'ngx-toastr';
import {CustomValidators} from '../../../../shared/services/custom-validators/custom-validators.service';

@Component({
  selector: 'bizbo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessages = {
    username: {
      required: 'Username is required',
      notAlphaNum: 'Please type Alphanumeric characters only',
      maxlength: 'Maximum length is 10 characters'
    },
    password: {
      required: 'Password is required',
      invalidPassword: 'Password must contain number, symbol an capital letter',
      maxlength: 'Maximum length is 10 characters'
    }
  };
  showToggle = false;
  loggingInProgress = false;

  constructor(private localStorage: LocalStorageService,
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private authService: AuthService,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.localStorage.removeAllLocals();
    this.initForm();
    this.loginForm.get('password').valueChanges.subscribe(value => {
      this.showToggle = value;
    });
  }

  initForm(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.maxLength(10), CustomValidators.isAlphanumeric]],
      password: ['', [Validators.required, Validators.maxLength(10), CustomValidators.isPassword]]
    });
  }

  /* Return AbstractControl To Form Control */
  formControlData(formControl): AbstractControl | FormControl {
    return this.loginForm.get(formControl);
  }

  /* Log User In */
  login(): void {
    if (this.loginForm.invalid) {
      return;
    }
    this.loggingInProgress = true;
    const body = {
      username: this.loginForm.get('username').value,
      password: this.loginForm.get('password').value
    };
    this.authService.login(body).subscribe((response: {data: {token: string}}) => {
      this.handleResponse(response);
    });
  }

  /* Handle Navigation After Login Based On User Type */
  handleResponse(response): void {
    this.loggingInProgress = false;
    if (response.data && response.data.token) {
      this.localStorage.setLocal('userToken', response.data.token);
      this.toastr.success('Successfully logged in', 'Success');
      this.router.navigate(['/home']);
    } else {
      this.toastr.error(response.message, 'Error');
    }
  }

  /* On Forget Password */
  forgetPassword(): void {
    console.log('User Forget Password');
  }

  /* On Sign Up */
  signUp(): void {
    console.log('Create New User');
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  
  requestData$!: Observable<any>;
  
  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.requestData$ = this.authService.userData$;
    
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }
  
  onFormSubmit(): void {
    const formData: any = this.loginForm.value;
    this.authService.login(formData?.email, formData?.password)
      .subscribe((res: any) => {
        console.log(res)
        // handle success message and redirect to next page
      }, (err) => {
        console.log(err)
        // handle invalid user message
      });
  }
}

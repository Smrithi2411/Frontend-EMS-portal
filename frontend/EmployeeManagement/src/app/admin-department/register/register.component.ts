import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import{ first } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  myform !: FormGroup;

  public submitted=false;
  constructor(private authService: AuthService, private router: Router,private fb: FormBuilder) { } 


  ngOnInit(): void{
    this.myform = new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      password2: new FormControl(''),
    });
  }

  get f() {
    return this.myform.controls;
  }
  


  submit(){
    this.submitted=true;
 }

  onSubmit() {
    
    this.authService.register(this.myform.value).pipe(first()).subscribe(
      data =>{
        // this.authService.success('Registration successful', true);
        this.router.navigate(['admin']);
        console.log(data);
        alert('Register Success');
      }
    )}
}




 
  
  
  
 
  
import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { PublicService } from './services/public.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EmployeeManagement';
  msg:any;

  constructor(private pService: PublicService, private route:Router){

  }
  ngOnInit():void{
    this.showMessage();
  }
  showMessage(){
    this.pService.getMessage().subscribe(data=>{
      this.msg = data,
      console.log(this.msg);
    });
  }


}
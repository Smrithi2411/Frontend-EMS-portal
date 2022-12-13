import { Component ,OnInit,Input  } from '@angular/core';
import { PublicService } from 'src/app/services/public.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-showleave',
  templateUrl: './showleave.component.html',
  styleUrls: ['./showleave.component.scss']
})

export class ShowleaveComponent implements OnInit {

  constructor(private service:PublicService,public authService:AuthService) { }

  LeaveList:any=[];

  ModalTitle!:string;
  ActivateAddEditEmpComp:boolean=false;
  ActivateviewEmpComp:boolean=false;
  emp:any;

  

  ngOnInit(): void {
    this.refreshEmpList();
  }

  addClick(){
    this.emp={
      
        // "apply_date": "",
        "user": "0",
        "nature_of_leave": "",
        "first_Day": "",
        "last_Day": "",
        "number_Of_Days": 0,
        "status": "pending",
       
        
    }
    this.ModalTitle="Add Leave";
    this.ActivateAddEditEmpComp=true;

  }

  editClick(item: any){
    console.log(item);

    if (this.emp.status=="pending"){
      this.emp=item;
      this.ModalTitle="Edit leave";
      this.ActivateAddEditEmpComp=true;
      this.ActivateviewEmpComp=false;
    }
    else{
     alert("Can't Edit this leave");
    }
      
  }

  deleteClick(item: { id: any; }){
    if(confirm('Are you sure??')){
      this.service.deleteleave(item.id).subscribe(data=>{
        alert(data.toString());
        this.refreshEmpList();
      })
    }
  }
  // view
  viewClick(item: any){
    console.log(item);
    this.emp=item;
    this.ModalTitle="View Leave";
    this.ActivateviewEmpComp=true;
  }

  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshEmpList();
  }


  refreshEmpList(){
    this.service.getleaveList().subscribe(data=>{
      this.LeaveList=data;
    });
  }

}


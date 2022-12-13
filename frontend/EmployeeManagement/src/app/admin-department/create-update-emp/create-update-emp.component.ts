import { Component, OnInit,Input } from '@angular/core';
import { PublicService } from 'src/app/services/public.service'

@Component({
  selector: 'app-create-update-emp',
  templateUrl: './create-update-emp.component.html',
  styleUrls: ['./create-update-emp.component.scss']
})
export class CreateUpdateEmpComponent implements OnInit {
  constructor(private service:PublicService) { }

  @Input() emp:any;
  EmployeeId!:string;
  employee_Name!:string;
  email!:string;
  contact_Number!:string;
  emergency_Contact_Number!:string;
  address!:string;
  position!:string;
  dOB!:string;
  martial_Status!:string;
  blood_Group!:string;
  job_Title!:string;
  work_Location!:string;
  date_Of_Joining!:string;
  reporting_To!:string;
  linkedin_Link!:string;
  Photo_File_Name!:string;
  PhotoFilePath!:string;

  ngOnInit(): void {
    this.EmployeeId=this.emp.EmployeeId;
    this.employee_Name=this.emp.employee_Name;
    this.email=this.emp.email;
    this.contact_Number=this.emp.contact_Number;
    this.emergency_Contact_Number=this.emp.emergency_Contact_Number;
    this.address=this.emp.address;
    this.position=this.emp.position;
    this.dOB=this.emp.dOB;
    this.martial_Status=this.emp.martial_Status;
    this.blood_Group=this.emp.blood_Group;
    this.job_Title=this.emp.job_Title;
    this.work_Location=this.emp.work_Location;
    this.date_Of_Joining=this.emp.date_Of_Joining;
    this.reporting_To=this.emp.reporting_To;
    this.linkedin_Link=this.emp.linkedin_Link;
    this.Photo_File_Name=this.emp.Photo_File_Name;
    this.PhotoFilePath=this.service.PhotoUrl+this.Photo_File_Name;
  }
  
  addEmployee(){
    var val = {EmployeeId:this.EmployeeId,
               employee_Name:this.employee_Name,
               email:this.email,
               contact_Number:this.contact_Number,
               emergency_Contact_Number:this.emergency_Contact_Number,
               address:this.address,
               position:this.position,
               dOB:this.dOB,
               martial_Status:this.martial_Status,
               blood_Group:this.blood_Group,
               job_Title:this.job_Title,
               work_Location:this.work_Location,
               date_Of_Joining:this.date_Of_Joining,
               reporting_To:this.reporting_To,
               linkedin_Link:this.linkedin_Link,
              Photo_File_Name:this.Photo_File_Name};

    this.service.addEmployee(val).subscribe(res=>{
      alert(res.toString());
    });
  }



  updateEmployee(){
    var val = {EmployeeId:this.EmployeeId,
               employee_Name:this.employee_Name,
               email:this.email,
               contact_Number:this.contact_Number,
               emergency_Contact_Number:this.emergency_Contact_Number,
               address:this.address,
               position:this.position,
               dOB:this.dOB,
               martial_Status:this.martial_Status,
               blood_Group:this.blood_Group,
               job_Title:this.job_Title,
               work_Location:this.work_Location,
               date_Of_Joining:this.date_Of_Joining,
               reporting_To:this.reporting_To,
               linkedin_Link:this.linkedin_Link,
              Photo_File_Name:this.Photo_File_Name};

    this.service.updateEmployee(val).subscribe(res=>{
     alert(res.toString());
    });
  }


 

  uploadPhoto (event:any){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.Photo_File_Name=data.toString();
      this.PhotoFilePath=this.service.PhotoUrl+this.Photo_File_Name;
    })
  }

}

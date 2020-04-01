import { Component, OnInit,TemplateRef } from '@angular/core';
import { ApiService } from './api.service';
import { Employee } from './employee.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  modalRef: BsModalRef;
users:any;
edituser:any;
employee:Employee=new Employee();

openModal(template: TemplateRef<any>,user) {
  this.modalRef = this.modalService.show(template);
  this.edituser=user;
}
constructor(private api:ApiService,private modalService: BsModalService){}
  ngOnInit(){
    this.getEmp();
  }
  getEmp(){
this.api.get().subscribe(data=>{
  this.users=data;
  console.log(this.users)
},error=>{
  console.log(error);
})
  }
  save(){
    this.api.post(this.employee).subscribe(data=>{
      console.log(data);
      this.getEmp();
    },error=>{
      console.log(error);
    })
  }
  id={'id':''}
  delete(id){
    this.id.id=id
    this.api.delete(this.id).subscribe(data=>{
      console.log(data);
      this.getEmp();
    },error=>{
      console.log(error);
    })
  }
  update(){
    this.api.update(this.edituser).subscribe(data=>{
      this.getEmp();
      console.log(data);
      this.modalRef.hide();
    },error=>{
      console.log(error);
    })
  }
 
}

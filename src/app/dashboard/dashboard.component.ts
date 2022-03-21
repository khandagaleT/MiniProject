import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { DashboardModel } from './dashboard.model';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../shared/api.service';

import { asLiteral } from '@angular/compiler/src/render3/view/util';
// import{DashboardService} from './shared1/dashboard.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
 
  userForm!: FormGroup;
  brand!:string;
  carname!:string;
  type!:string;
  price!:number;
  listData:any;
  item: any;
  // actionbtn: string="Submit";
  dbobj:DashboardModel = new DashboardModel();

  btnSaveShow:boolean = true;
  btnUpdateShow:boolean = false;
  


  constructor(private fb:FormBuilder,private api:ApiService, private http: HttpClient) {
    this.listData=[]; 

   
   }
//    onsubmit() {
//     if(!this.item){
//       this.listData.push(this.userForm.value);
//       console.log(this.listData);
//       this.userForm.reset();
//       alert("Submitted successfully");
//     }
//     else{
     
//       this.item.push(this.userForm.value);
//       alert("Upated successfully");
//       // this.update(this.item);
//     }
//      }

//      update(item:any){
//       this.item.brand=this.userForm.value.brand;
//       this.item.carname=this.userForm.value.carname;
//       this.item.type=this.userForm.value.type;
//       this.listData.push(this.userForm.value);
//       console.log(this.listData);
      
      
//     }
    
  
  onclear(){
    this.userForm.reset();
  }

//   removeItem(item: any){
//     this.listData.forEach((value: any, index: any): void => {
//     if(value==item)
//     this.listData.splice(index,1);
// });
//   }
//  onedit(item:any): void{
//    this.actionbtn="Update";
//   this.userForm.controls['brand'].setValue(item.brand);
//   this.userForm.controls['carname'].setValue(item.carname);
//   this.userForm.controls['type'].setValue(item.type);
//   this.item.push(this.userForm.value);
  // }
  
  ngOnInit(): void {
    
    this.userForm= this.fb.group({
      
      brand : ['', Validators.required],
      carname : ['', Validators.required],
      type : ['', Validators.required],
      price :['', Validators.required],
    })
    this.getdata();
    
  }
  
  Adddata(){
    this.dbobj.brand=this.userForm.value.brand;
    this.dbobj.carname=this.userForm.value.carname;
    this.dbobj.type=this.userForm.value.type;
    this.dbobj.price=this.userForm.value.price;
    this.api.postdata(this.dbobj).subscribe({next: (v) => {
      console.log(v)
    },
    // error: (e) => {
    //   console.log(e)
    //   alert("Error")
    // },
    complete: () => {
      console.log('Added successfully');
      alert("Added successfully !!")
      this.getdata();
      this.userForm.reset();
       } })
  }
  getdata(){
    this.api.getdata().subscribe(res =>{
      this.listData=res;
    })
    }

    Delete(data:any){
      this.api.deletedata(data.id).subscribe({next: (v) =>{
        console.log(v)
      },
      // error: (e) => {
      //  console.log(e)
      //  alert("Error")
      //  },
      complete:() => {
        console.log('Deleted Successful')
        alert("Deleted Successful !!")
        this.getdata();
      }})
    }
    edit(item:any)
    {
      this.dbobj.id=item.id;
      this.userForm.controls['brand'].setValue(item.brand);
      this.userForm.controls['carname'].setValue(item.carname);
      this.userForm.controls['type'].setValue(item.type);
      this.userForm.controls['price'].setValue(item.price);
      this.showUpdate(); 
    }

    updatedata()
    {
    // this.dbobj.id=this.userForm.value.id;
    this.dbobj.brand=this.userForm.value.brand;
    this.dbobj.carname=this.userForm.value.carname;
    this.dbobj.type=this.userForm.value.type;
    this.dbobj.price=this.userForm.value.price;
    this.api.updatedata(this.dbobj,this.dbobj.id).subscribe({next: (v) =>{
      console.log(v);
    },
    // error: (e) => {
    //  console.log(e)
    //  alert("Error")
    //  },
    complete:() => {
      console.log('Updated Successful')
      alert("Updated Successful !!")
      this.getdata();
      this.userForm.reset();
      this.showSave();
       this.dbobj.id;
    }})
  }
    
showSave(){
  this.btnSaveShow = true;
  this.btnUpdateShow = false;
}
showUpdate(){
  this.btnUpdateShow = true;
  this.btnSaveShow = false;
}
    }





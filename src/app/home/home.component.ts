import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }     
  
//   onLogin(){
//     if(this.x=="tanuj" && this.y=="tanuj"){
//       console.log("Login successful!!!")
//       this.router.navigate(["/dashboard"]);
//     }
//     else{
//       alert("Invalid Credential!! Please enter correct Credential");
      
//       // this.router.navigate(["/login"]);
//     }
//   }
}

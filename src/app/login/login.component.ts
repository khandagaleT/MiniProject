import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }
  x!:string;
y!:string;
  ngOnInit(): void {
  }
  onLogin(){
    if(this.x=="tanuj" && this.y=="tanuj"){
      console.log("Login successful!!!")
      this.router.navigate(["/dashboard"]);
    
    }
    else{
      alert("Invalid Credential!! Please enter correct Credential");
      
      this.router.navigate(['/home']);
    }
  }
}


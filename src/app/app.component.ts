import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Admin';
  sideBaropen= true;

  sideBarToggler()
{
  this.sideBaropen= !this.sideBaropen;
}
}

  // constructor(private router:Router) { }
  // x!:string;
  // y!:string;
  //   ngOnInit(): void {
  //   }
    
  //   onLogin(){
  //     if(this.x=="tanuj" && this.y=="tanuj"){
  //       console.log("Login successful!!!")
  //       this.router.navigate(["/dashboard"]);
  //     }
  //     else{
  //       alert("Invalid Credential!! Please enter correct Credential");
        
  //       this.router.navigate(["/home"]);
  //     }
  //   }
  // }
  




// ngOnInit(){}




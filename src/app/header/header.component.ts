import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Output() togglesidenavforme : EventEmitter <any>=new EventEmitter();
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  togglesidebar(){
    this.togglesidenavforme.emit();
  }

  logout(){
    this.router.navigate(['/login']);
  }
  login(){
    this.router.navigate(['/login']);
  }
}

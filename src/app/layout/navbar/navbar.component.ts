import { Component, HostListener, OnInit } from '@angular/core';
import { HomeComponent } from 'src/app/home/home.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  hideMenuButton=true

  constructor(private homeComponent:HomeComponent) { }

  ngOnInit(): void {
    this.resizeWindowFunction();
  }

  sideNavToggle(){
    console.log(this.homeComponent)
    this.homeComponent.sideNavToggle()
  }
  resizeWindowFunction(){
    if(window.innerWidth>640){
      this.hideMenuButton=true
    }
    else{
      this.hideMenuButton=false
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.resizeWindowFunction();
  }

}

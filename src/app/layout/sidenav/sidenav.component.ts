import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  opened = true;
  mode = true;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.resizeWindowFunction();
  }

  sideNavToggle() {
    var sideNavToggle = document.getElementById('sideNavBtn')
    sideNavToggle?.click();
  }
  resizeWindowFunction() {
    if (window.innerWidth > 640) {
      this.opened = true
      this.mode = true
    }
    else {

      this.opened = false
      this.mode = false
    }
  }


  @HostListener('window:resize', ['$event'])
  onResize() {
    this.resizeWindowFunction();
  }

}

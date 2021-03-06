import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
  hasRoute(route: string) {
    return this.router.url.includes(route);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.resizeWindowFunction();
  }
}

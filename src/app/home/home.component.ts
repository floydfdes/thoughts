import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  opened = true;
  mode = true;
  constructor() { }

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

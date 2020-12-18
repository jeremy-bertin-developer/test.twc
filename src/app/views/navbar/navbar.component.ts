import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  sectionId: string;
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.sectionId = 'home';
  }

  onClickScroll(sectionId: any): void {
    this.sectionId = sectionId;
    this.viewportScroller.scrollToAnchor(sectionId);
  }
}

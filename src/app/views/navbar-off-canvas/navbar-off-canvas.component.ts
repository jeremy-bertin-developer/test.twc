import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-off-canvas',
  templateUrl: './navbar-off-canvas.component.html',
  styleUrls: ['./navbar-off-canvas.component.css'],
})
export class NavbarOffCanvasComponent implements OnInit {
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

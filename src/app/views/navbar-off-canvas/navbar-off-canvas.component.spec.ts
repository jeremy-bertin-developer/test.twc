import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarOffCanvasComponent } from './navbar-off-canvas.component';

describe('NavbarOffCanvasComponent', () => {
  let component: NavbarOffCanvasComponent;
  let fixture: ComponentFixture<NavbarOffCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarOffCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarOffCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

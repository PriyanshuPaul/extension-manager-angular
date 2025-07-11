import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyComponent } from './body.component';

describe('BodyComponent', () => {
  let component: BodyComponent;
  let fixture: ComponentFixture<BodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select data when active/inactive pills selected', () => {
    component.onPillBtnClick(1)
    component.onPillBtnClick(2)
  })

  it('should remove card when remove button clicked', () => {
    component.removeCard("c7")
  })

  it('should change pill status on switch clicked', () => {
    component.onToggleSwitchClick("c8")
  })
});

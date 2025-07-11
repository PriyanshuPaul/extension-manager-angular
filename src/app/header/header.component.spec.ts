import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { ImagePaths } from '../app.constants';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set light theme when dark mode active', () => {
    component.btnImgPath = ImagePaths.moon
    component.isThemeBtnClicked()
    expect(component.btnImgPath = ImagePaths.sun)
    component.btnImgPath = ImagePaths.sun
    component.isThemeBtnClicked()
  })
});

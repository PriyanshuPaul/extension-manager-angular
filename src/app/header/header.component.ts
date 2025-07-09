import { Component, EventEmitter, Output } from '@angular/core';
import { ImagePaths, Theme } from '../app.constants';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  btnImgPath: string = ImagePaths.moon;
  logoImgPath: string = ImagePaths.logo;
  @Output() theme = new EventEmitter<string>;
  public isThemeBtnClicked() {
    if (this.btnImgPath === ImagePaths.moon) {
      this.btnImgPath = ImagePaths.sun;
      this.logoImgPath = ImagePaths.logodark;
      this.theme.emit(Theme.dark);
    }
    else {
      this.btnImgPath = ImagePaths.moon;
      this.logoImgPath = ImagePaths.logo;
      this.theme.emit(Theme.light)
    }
  }
}

import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { Theme } from './app.constants';
import { BodyComponent } from "./body/body.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, BodyComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  theme = Theme.light;
  public setTheme(event: any) {
    this.theme = event;
  }
}

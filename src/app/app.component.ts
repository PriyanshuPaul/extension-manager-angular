import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { Theme } from './app.constants';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'extension-manager-angular';
  theme = Theme.light;
  public setTheme(event: any) {
    this.theme = event;
  }
}

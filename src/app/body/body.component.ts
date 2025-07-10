import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ICard } from '../model/card.model';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './body.component.html',
})
export class BodyComponent {
  buttons = ['All', 'Active', 'Inactive'];
  card: ICard = {
    "logo": "./assets/images/logo-devlens.svg",
    "name": "DevLens",
    "description": "Quickly inspect page layouts and visualize element boundaries.",
    "isActive": true
  }
  selectedIndex: number = -1
  public onPillBtnClick(selectedIndex: any) {
    this.selectedIndex = this.selectedIndex === selectedIndex ? -1 : selectedIndex;
    console.log(selectedIndex)
  }
  onToggleSwitchClick(event: boolean) {
    console.log(event);
  }
}

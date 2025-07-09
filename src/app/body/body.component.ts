import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [],
  templateUrl: './body.component.html',
})
export class BodyComponent {
  buttons = ['All', 'Active', 'Inactive'];
  selectedIndex: number = -1
  public onPillBtnClick(selectedIndex: any) {
    this.selectedIndex = this.selectedIndex === selectedIndex ? -1 : selectedIndex;
    console.log(selectedIndex)
  }
}

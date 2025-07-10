import { Component, EventEmitter, Input, input, OnInit, Output } from '@angular/core';
import { ICard } from '../model/card.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {

  @Input() card!: ICard;
  @Output() toggleSwitchClicked = new EventEmitter();
  @Output() removeBtnClicked = new EventEmitter();
  switchBackground!: string;

  ngOnInit(): void {
    this.setSwitchBackground();
  }

  setSwitchBackground(): void {
    this.switchBackground = this.card?.isActive ? ' bg-red-700' : ' bg-neutral-300'

  }

  onSwitchChange(): void {
    this.card.isActive = !this.card.isActive;
    this.setSwitchBackground();
    this.toggleSwitchClicked.emit(this.card.id);
  }

  onRemoveBtnClick() {
    this.removeBtnClicked.emit(this.card.id)
  }
}

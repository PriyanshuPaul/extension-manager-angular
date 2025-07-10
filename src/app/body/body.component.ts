import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ICard } from '../model/card.model';
import { mockExtensions } from '../model/mockExtensions';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './body.component.html',
})

export class BodyComponent implements OnInit {
  buttons = ['All', 'Active', 'Inactive'];

  selectedIndex: number = 0;
  cards!: ICard[];
  cardsVisible!: ICard[];

  ngOnInit(): void {
    this.cards = mockExtensions;
    this.setCardData();
  }

  public onPillBtnClick(selectedIndex: any) {
    this.selectedIndex = selectedIndex;
    this.setCardData()
  }

  public setCardData() {
    switch (this.selectedIndex) {
      case 1: this.cardsVisible = this.cards.filter((card) => card.isActive); break;
      case 2: this.cardsVisible = this.cards.filter((card) => !card.isActive); break;
      default: this.cardsVisible = this.cards; break;

    }
  }

  onToggleSwitchClick(cardId: string) {
    this.cards.map(card =>
      card.id === cardId ? { ...card, isActive: !card.isActive } : card
    )
    setTimeout(() => {
      this.setCardData();
    }, 400);
  }

  removeCard(cardId: string) {
    this.cards = this.cards.filter(card => card.id != cardId)
    setTimeout(() => {
      this.setCardData();
    }, 400);
  }
}

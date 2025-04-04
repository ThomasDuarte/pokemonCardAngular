import { Component, Input } from '@angular/core';
import { Monster } from '../../models/monster.model';

@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css',
})
export class PlayingCardComponent {
  @Input({
    alias: 'my-monster',
    // Permet de modifier la value de l'input
    // transform: (value: Monster) => {
    //   value.hp = value.hp / 2;
    //   return value;
    // },
  })
  monster: Monster = new Monster();
}

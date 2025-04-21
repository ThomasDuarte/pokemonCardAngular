import { Component, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  //Créer notrre propre evenement

  search = model<string>('Initial');

  searchButtonClicked = output({ alias: 'submit' });

  searchClick() {
    this.searchButtonClicked.emit();
  }
}

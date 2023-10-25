import { Component } from '@angular/core';

interface Game {
  name: string;
}

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent {
  showCreateGameModal = false;
  newGame: Game = { name: '' };
  games: Game[] = [
    { name: 'Existing Game 1' },
    { name: 'Existing Game 2' },
    // ... other existing games
  ];

  createGame() {
    console.log('Creating game:', this.newGame);
    this.games.push(this.newGame);
    this.showCreateGameModal = false;
    this.newGame = { name: '' };
  }
}
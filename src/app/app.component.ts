import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: []
})
export class AppComponent {
  title = 'aa-angular-study';
  gamesCountIndex = 0;
  games: {
    evenCount: number[],
    oddCount: number[]
  }[] = [];


  onGameStart(evObj: {count: number}){
    // if game does not exist create it
    if(!this.games[this.gamesCountIndex]){
      this.games[this.gamesCountIndex] = {
        evenCount: [],
        oddCount: []
      }
    }

    // determine if number is odd or even and add it to current game collection
    if(evObj.count % 2 == 0){
      this.games[this.gamesCountIndex].evenCount.push(evObj.count);
    } else {
      this.games[this.gamesCountIndex].oddCount.push(evObj.count);
    }
  }

  onGameEnd(evObj: {gameCount: number}){
    // update the gamesCount index when the game ends
    this.gamesCountIndex = evObj.gameCount;
  }
}

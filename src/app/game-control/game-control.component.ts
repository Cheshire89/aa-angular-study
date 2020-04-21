import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TimeInterval } from 'rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {
  count = 0;
  gameCount = 0;
  @Output() startGame = new EventEmitter();
  @Output() endGame = new EventEmitter();
  intervalHook: any;

  constructor() { }

  ngOnInit() {
  }

  onStartGame(): void{
    this.count = 0;
    this.intervalHook = setInterval(() => {
      this.startGame.emit({count: this.count++});
    }, 1000);
  }

  onEndGame(): void{
    clearTimeout(this.intervalHook);
    this.gameCount++;
    this.endGame.emit({gameCount: this.gameCount});
  }

}

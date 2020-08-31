import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

interface Letter {
  letter: string;
  vowel: boolean;
  blank: boolean;
}
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower'
  ];

  teams = [
    'Nationals',
    'Braves',
    'Phillies',
  ];

  letters = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.createLetters());
  }

  createLetters() {
    for (let i = 65; i < 90; i++) {
      this.letters.push(String.fromCharCode(i));
    }
    console.log(this.letters);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}

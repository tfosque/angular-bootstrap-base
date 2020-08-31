import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  rows = [];
  slots = [];

  letters = [];

  constructor() { }

  ngOnInit(): void {
    this.createLetters();
    this.createSlots();
    // this.createRows();
  }

  createLetters() {
    for (let i = 65; i < 90; i++) {
      this.letters.push(String.fromCharCode(i));
    }
    console.log(this.letters);
  }
  createSlots() {
    for (let i = 0; i < 13; i++) {
      this.slots.push(i);
    }
  }

  createRows() {
    for (let i = 0; i < 13; i++) {
      this.slots.push(' ');
    }
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

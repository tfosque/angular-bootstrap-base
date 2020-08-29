import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  boardRow = [];
  constructor() { }

  ngOnInit(): void {
    this.createRow15();
  }

  createRow15() {
    const row = this.boardRow = Array(15).fill(0).map((x, i) => i);
    console.log({row});
  }

}

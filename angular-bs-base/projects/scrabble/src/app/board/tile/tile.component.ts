import { Component, OnInit, ElementRef } from '@angular/core';

export interface Tile {
  id: string;
  color?: string;
  letter: number;
  value?: number;
  theme?: string;
  bagged: boolean;
}

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  tile: any;
  constructor(
    private readonly elem: ElementRef
  ) { }

  ngOnInit() {

  }

  createTile(): Tile {

    const atile = {
      id: '#1w2e3r',
      color: 'lightblue',
      letter: 66,
      bagged: true
    };
    return atile;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.scss']
})
export class LetterComponent implements OnInit {
  letter = 0;

  constructor() { }

  ngOnInit(): void {

  }


  // console.log('char:', '\n'.charCodeAt(0));
  // console.log('charCode:', String.fromCharCode(65, 66, 67));
  // "ABC".charCodeAt(0)

  /* 86 tiles
    A-7, B-2, C-2, D-4, E-11, F-2
    G-3, H-2, I-8, J-1, K-1, L-4
    M-2, N-6, O-6, P-2, Q-1, R-6
    S-4, T-5, U-4, V-2, W-2, X-1
    Y-2, Z-1, BLANK-2
  */

  /* A-Z Captial
    65-90 */

}

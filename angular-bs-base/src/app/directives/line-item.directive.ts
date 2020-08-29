import { Directive, Input, OnInit, ElementRef } from '@angular/core';
import { Data } from '../cart/cart.component';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[lineItem]'
})
export class LineItemDirective implements OnInit {
  @Input() columns: string[] = [];
  @Input() dataItem: Data;

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit() {
    console.log(this.dataItem);

    this.el.nativeElement.style.border = 'solid thin #e8e8e8';

    setTimeout(() => {
      this.buildColumns();
      this.el.nativeElement.innerHTML = this.buildColumns();
    }, 1000);
  }

  displayUI() {
    return `<div class="d-md-none" style="padding: 10px;">${this.dataItem.last}</div>`;
  }

  displayWithColoumns() {
    return '<div>with columns</div>';
  }

  buildColumns() {
    // loop over data keys to find correct columns to build
    const ui = [];

    Object.keys(this.dataItem).map(dataCol => {
      this.columns.filter(col => {
        if (dataCol === col) {
          if (col.includes('Url')) {
            ui.push(`<img style="float: left" src="${this.dataItem[col]}" />`);
          } else {
            ui.push(`<div style="text-align: left">${this.dataItem[col]}</div>`);
          }
        }
      });
    });
     // console.log('join:', ui.join(''));
    return ui.join('');
  }

}

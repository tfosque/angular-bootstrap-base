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
    setTimeout(() => {
      this.el.nativeElement.style.border = 'solid thin #e8e8e8';
      this.el.nativeElement.innerHTML = this.buildColumns();
    }, 1000);
    console.log('dataItem:', this.dataItem);
  }

  layout(layout: HTMLElement) {
    return;
  }

  buildColumns() {
    const ui = [];

    // loop over data keys to find correct columns to build
    Object.keys(this.dataItem).map(dataCol => {
      // console.log('keys:order', {dataCol});

      this.columns.filter(col => {
        if (dataCol === col && col.includes('Url')) {
          ui.unshift(`
            <div class="col-3">
              <img
                width="80"
                style="padding-right: 7px;"
                src="${this.dataItem[col]}"
              />
            </div>
          `);
          return;
        }
        if (dataCol === col) {
          ui.push(`
            <div class="col-auto style="text-align: left">
              ${this.dataItem[col]}
            </div>
          `);
        }
      });
    });
     // console.log('join:', ui.join(''));
     console.log(this.el.nativeElement.innerHTML);
    return `
      <div class="container">
        <div class="row">
          ${ui.join('')}
        </div>
      </div>
    `;
  }

  buildLayout() {
    const ui = [];

    // loop over data keys to find correct columns to build
    Object.keys(this.dataItem).map(dataCol => {
      this.columns.filter(col => {
        if (dataCol === col && col.includes('Url')) {
          ui.push(`
            <div class="col-3>
              <img
                style="padding-right: 10px;"
                src="${this.dataItem[col]}"
              />
            </div>
          `);
          return;
        }
        if (dataCol === col) {
          ui.push(`
            <div
              class="col-auto style="text-align: left"
            >
              ${dataCol}:
              ${this.dataItem[col]}
            </div>
          `);
        }
      });
    });
     // console.log('join:', ui.join(''));
    return ui.join('');
  }

  createImg(col: any) {
    return `
      <img
        style="padding-right: 10px; display: inline"
        src="${this.dataItem[col]}"
      />
    `
  }

}

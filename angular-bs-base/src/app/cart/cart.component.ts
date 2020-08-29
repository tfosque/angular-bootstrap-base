import { Component, OnInit } from '@angular/core';
export interface Data {
  id?: number;
  first?: string;
  last?: string;
  email?: string;
  gender?: string;
  ip_address?: string;
}
const data = [
  {
    id: 1,
    first: 'Dru',
    last: 'Renfield',
    email: 'drenfield0@meetup.com',
    gender: 'Female',
    ip_address: '178.90.3.109',
    imgUrl: 'http://dummyimage.com/100x100.jpg/dddddd/000000'
  },
  {
    id: 2,
    first: 'Estevan',
    last: 'O Sharkey',
    email: 'eosharkey1@pinterest.com',
    gender: 'Male',
    ip_address: '127.86.240.79',
    imgUrl: 'http://dummyimage.com/100x100.jpg/5fa2dd/ffffff'
  },
  {
    id: 3,
    first: 'Gisella',
    last: 'Danbury',
    email: 'gdanbury2@godaddy.com',
    gender: 'Female',
    ip_address: '21.153.218.117',
    imgUrl: 'http://dummyimage.com/100x100.jpg/5fa2dd/ffffff'
  },
  {
    id: 4,
    first: 'Benita',
    last: 'Tomblett',
    email: 'btomblett3@biglobe.ne.jp',
    gender: 'Female',
    ip_address: '224.12.164.146',
    imgUrl: 'http://dummyimage.com/100x100.jpg/dddddd/000000'
  },
  {
    id: 5,
    first: 'Deane',
    last: 'Gush',
    email: 'dgush4@privacy.gov.au',
    gender: 'Female',
    ip_address: '63.115.178.171',
    imgUrl: 'http://dummyimage.com/100x100.jpg/dddddd/000000'
  },
  {
    id: 6,
    first: 'Linn',
    last: 'Matteini',
    email: 'lmatteini5@addtoany.com',
    gender: 'Female',
    ip_address: '25.133.168.13',
    imgUrl: 'http://dummyimage.com/100x100.jpg/ff4444/ffffff'
  },
  {
    id: 7,
    first: 'Rona',
    last: 'Navarijo',
    email: 'rnavarijo6@mozilla.org',
    gender: 'Female',
    ip_address: '58.253.67.250',
    imgUrl: 'http://dummyimage.com/100x100.jpg/dddddd/000000'
  },
  {
    id: 8,
    first: 'Sergent',
    last: 'Yitzovitz',
    email: 'syitzovitz7@1688.com',
    gender: 'Male',
    ip_address: '214.0.221.171',
    imgUrl: 'http://dummyimage.com/100x100.jpg/cc0000/ffffff'
  },
  {
    id: 9,
    first: 'Dorise',
    last: 'Purdy',
    email: 'dpurdy8@plala.or.jp',
    gender: 'Female',
    ip_address: '200.65.51.226',
    imgUrl: 'http://dummyimage.com/100x100.jpg/5fa2dd/ffffff'
  },
  {
    id: 10,
    first: 'Faythe',
    last: 'Gilstin',
    email: 'fgilstin9@instagram.com',
    gender: 'Female',
    ip_address: '159.115.52.31',
    imgUrl: 'http://dummyimage.com/100x100.jpg/5fa2dd/ffffff'
  }
];

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  defaultColumns = ['first', 'last', 'email'];
  dataSource: Data[] = data;
  constructor() { }

  ngOnInit(): void {

  }

}

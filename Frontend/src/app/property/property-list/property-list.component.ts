import { Component } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {
  properties: Array<any> = [
    {
    "Id": 1,
    "Name": "Birla house",
    "Type": "House",
    "Price": 12000
  },
  {
    "Id": 2,
    "Name": "Erose house",
    "Type": "House",
    "Price": 23000
  }, {
    "Id": 3,
    "Name": "Small house",
    "Type": "House",
    "Price": 7000
  },
  {
    "Id": 4,
    "Name": "Villa house",
    "Type": "House",
    "Price": 112000
  },
  {
    "Id": 5,
    "Name": "Dam house",
    "Type": "House",
    "Price": 55000
  }
]
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() title: string = ''
  @Input() color: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  date = new Date()

} 



import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nts-simple-info-card',
  templateUrl: './simple-info-card.component.html',
  styleUrls: ['./simple-info-card.component.css']
})
export class SimpleInfoCardComponent implements OnInit {

  @Input() title!: string;
  @Input() lines: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

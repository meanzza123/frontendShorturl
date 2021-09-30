import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'list-url',
  templateUrl: './list-url.component.html',
  styleUrls: ['./list-url.component.scss']
})
export class ListUrlComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }
  copy = (textCopy: string) => {
    navigator.clipboard.writeText(this.data.shortURL)
  }



}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  date: string|number|Date = '2022-09-26';

  constructor() { }

  ngOnInit(): void {
  }

}

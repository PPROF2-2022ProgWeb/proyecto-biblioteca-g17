import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const btnToggle = document.querySelector('.toggle-btn');
    const home = document.getElementById('home');
    btnToggle?.addEventListener('click',() => {
      if(home?.className != 'active'){
        home?.classList.toggle('active')
      }
    })
  }

}

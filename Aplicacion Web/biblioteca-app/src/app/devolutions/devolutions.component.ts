import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devolutions',
  templateUrl: './devolutions.component.html',
  styleUrls: ['./devolutions.component.css']
})
export class DevolutionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const btnToggle = document.querySelector('.toggle-btn');
    const devolutions = document.getElementById('devolutions');
    btnToggle?.addEventListener('click',() => {
      if(devolutions?.className != 'active'){
        devolutions?.classList.toggle('active')
      }
    })
  }

}

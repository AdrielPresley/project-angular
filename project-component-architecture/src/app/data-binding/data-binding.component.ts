import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  name: string = 'Adriel';
  newName: string;
  avatar: string = 'assets/img/ap.jpg';

  constructor() { }

  ngOnInit(): void {
  }
  
  MynameHero(){
    this.name = this.newName;
    this.avatar = 'assets/img/allmight.jpg';
  }
}
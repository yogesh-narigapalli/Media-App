import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  eight=[{image:"https://picsum.photos/id/117/240/240",desc:"Home"},
  {image:"https://picsum.photos/id/128/240/240",desc:"Home"},
  {image:"https://picsum.photos/id/119/240/240",desc:"Home"},
  {image:"https://picsum.photos/id/120/240/240",desc:"Home"},
  {image:"https://picsum.photos/id/121/240/240",desc:"Home"},
  {image:"https://picsum.photos/id/122/240/240",desc:"Home"}]

  constructor() { }

  ngOnInit(): void {
  }

}

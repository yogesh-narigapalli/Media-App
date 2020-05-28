import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  eight=[{image:"http://placeimg.com/240/240/tech",desc:"Technology"},
  {image:"http://placeimg.com/240/240/nature",desc:"Nature"},
  {image:"http://placeimg.com/240/240/animals",desc:"Animals"},
  {image:"http://placeimg.com/240/240/architecture",desc:"Architecture"},
  {image:"http://placeimg.com/240/240/people",desc:"People"},
  {image:"http://placeimg.com/240/240/any",desc:"Any"}]

  constructor() { }

  ngOnInit(): void {
  }

}

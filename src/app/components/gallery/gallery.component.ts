import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  eight=[{image:"http://placeimg.com/240/240/people/1",desc:"People"},
  {image:"http://placeimg.com/240/240/people/2",desc:"People"},
  {image:"http://placeimg.com/240/240/people/3",desc:"People"},
  {image:"http://placeimg.com/240/240/nature/4",desc:"Nature"},
  {image:"http://placeimg.com/240/240/nature/5",desc:"Nature"},
  {image:"http://placeimg.com/240/240/nature/6",desc:"Nature"}]


  constructor() { }

  ngOnInit(): void {
  }

}

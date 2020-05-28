import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  eight=[{image:"https://picsum.photos/id/237/240/240",desc:"Gallery"},
  {image:"https://picsum.photos/id/238/240/240",desc:"Gallery"},
  {image:"https://picsum.photos/id/239/240/240",desc:"Gallery"},
  {image:"https://picsum.photos/id/240/240/240",desc:"Gallery"},
  {image:"https://picsum.photos/id/241/240/240",desc:"Gallery"},
  {image:"https://picsum.photos/id/242/240/240",desc:"Gallery"}]


  constructor() { }

  ngOnInit(): void {
  }

}

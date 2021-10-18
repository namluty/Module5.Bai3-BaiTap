import { Component, OnInit } from '@angular/core';
import {Image} from "./image";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
 img: Image = {
   name: 'Monkey',
   image: 'https://allimages.sgp1.digitaloceanspaces.com/photographercomvn/2020/08/1597303784_769_Hinh-anh-Luffy-va-nhung-nguoi-ban-trong-One-Piece.jpg'
 };
  constructor() { }

  ngOnInit(): void {
  }

}

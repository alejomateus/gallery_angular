import { Component, OnInit, Input } from "@angular/core";
import { Image } from "../../models/image";
@Component({
  selector: "app-image-list",
  templateUrl: "./image-list.component.html",
  styleUrls: ["./image-list.component.scss"]
})
export class ImageListComponent implements OnInit {
  images: new Image[] =[
  new Image("1",
    "First Image",
    "Description First Image",
    "https://videotutoriales.com/maspa/maspa1.jpg",
    "https://videotutoriales.com/maspa/maspa1-1.jpg"
  ),
  new Image("2",
    "Second Image",
    "Description First Image",
    "https://videotutoriales.com/maspa/maspa2.jpg",
    "https://videotutoriales.com/maspa/maspa2-1.jpg"
  ),
  new Image("3",
    "Third Image",
    "Description First Image",
    "https://videotutoriales.com/maspa/maspa3.jpg",
    "https://videotutoriales.com/maspa/maspa3-1.jpg"
  ),
  new Image("4",
    "Fourth Image",
    "Description First Image",
    "https://videotutoriales.com/maspa/maspa4.jpg",
    "https://videotutoriales.com/maspa/maspa4-1.jpg"
  ),
  new Image("5",
    "Fifth Image",
    "Description First Image",
    "https://videotutoriales.com/maspa/maspa5.jpg",
    "https://videotutoriales.com/maspa/maspa5-1.jpg"
  ),
  new Image("6",
    "Sixth Image",
    "Description First Image",
    "https://videotutoriales.com/maspa/maspa6.jpg",
    "https://videotutoriales.com/maspa/maspa6-1.jpg"
  ),
  new Image("7",
    "Seventh Image",
    "Description First Image",
    "https://videotutoriales.com/maspa/maspa7.jpg",
    "https://videotutoriales.com/maspa/maspa7-1.jpg"
  ),
  new Image("8",
    "Eigth Image",
    "Description First Image",
    "https://videotutoriales.com/maspa/maspa8.jpg",
    "https://videotutoriales.com/maspa/maspa8-1.jpg"
  )];
    ;
  constructor() {}

  ngOnInit() {}
}

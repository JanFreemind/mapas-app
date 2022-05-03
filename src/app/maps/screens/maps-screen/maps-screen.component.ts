import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services';


@Component({
  selector: 'app-maps-screen',
  templateUrl: './maps-screen.component.html',
  styleUrls: ['./maps-screen.component.css']
})
export class MapsScreenComponent implements OnInit {

  constructor( private placesService: PlacesService ) { }

  ngOnInit(): void {
  }

}

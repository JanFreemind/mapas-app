import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {

  constructor( private placesServices: PlacesService ) { }

  ngOnInit(): void {
    console.log( this.placesServices.useLocation );
  }

}
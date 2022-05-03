import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Map } from 'mapbox-gl';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef

  constructor( private placesServices: PlacesService ) { }

  ngAfterViewInit(): void {

    if ( !this.placesServices.useLocation ) throw Error('No hay placesService.userLocation');
    
    
    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.placesServices.useLocation, // starting position [lng, lat]
      zoom: 14 // starting zoom
      });

  }

  

}

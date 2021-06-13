import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {MapInfoWindow, MapMarker} from "@angular/google-maps";
import {MapsStlye} from "../../../declarations/maps.style";

@Component({
    selector: 'slm-map-component',
    templateUrl: 'map.component.html'
})
export class SlmMapComponent implements OnInit {

    mapStyle = MapsStlye;

    @Input()
    apiKey: string | undefined;

    @Input()
    infoWindowText: string | undefined;

    @Input()
    latitude: number | undefined;

    @Input()
    longitude: number | undefined;

    options: google.maps.MapOptions = {};
    markerOptions: google.maps.MarkerOptions = {};
    markerPositions: google.maps.LatLngLiteral[] = [];
    @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;

    apiLoaded: Observable<boolean> | undefined;

    constructor(private httpClient: HttpClient) {}

    ngOnInit() {
        this.apiLoaded = this.httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=' + this.apiKey, 'callback')
            .pipe(
                map(() => true),
                catchError(() => of(false)),
            );
        this.markerOptions = {
            draggable: false,
            icon: 'assets/marker.svg'
        }

        if (this.longitude && this.latitude) {
            this.options = {
                center: {lat: this.latitude, lng: this.longitude},
                zoom: 18,
                styles: this.mapStyle,
                mapTypeControl: false,
                streetViewControl: false,
                fullscreenControl: false
            };
            this.markerPositions.push({lat: this.latitude, lng: this.longitude});
        }
    }


    addMarker(event: google.maps.MapMouseEvent) {
        this.markerPositions.push(event.latLng.toJSON());
    }

    openInfoWindow(marker: MapMarker) {
        if (this.infoWindow) this.infoWindow.open(marker);
    }
}

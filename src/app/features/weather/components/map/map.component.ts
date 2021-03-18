import { formatNumber } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { latLng, MapOptions, tileLayer, Map, icon, marker, MarkerOptions, Icon, LeafletMouseEvent, LatLng } from 'leaflet';
import Coords from '../../models/Coords';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnChanges {
  @Input() coords: Coords;
  @Output() findAndCenterUserLocation: EventEmitter<void> = new EventEmitter<void>();
  @Output() selectedLocationChange: EventEmitter<Coords> = new EventEmitter<Coords>();

  private readonly DEFAULT_ZOOM: number = 12;

  map!: Map;
  mapOptions!: MapOptions;
  positionMarkerLayer: any;

  constructor() {
    this.coords = new Coords();
  }

  ngOnInit(): void {
    this.initializeMapOptions();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const change: SimpleChange = changes['coords'];
    if (!change.isFirstChange()) {
      this.updateLocationMarker(this.DEFAULT_ZOOM);
    }
  }

  private initializeMapOptions() {
    this.mapOptions = {
      zoom: this.DEFAULT_ZOOM,
      layers: [
        tileLayer(
          'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
            maxZoom: 18,
            attribution: '© OpenStreetMap'
          })
      ],
    };
  }
  public initializeMap(map: Map) {
    this.map = map;
    this.updateLocationMarker();
  }
  private updateLocationMarker(zoom?: number) {
    this.clearMarkerLayer();
    const coordinates = latLng([this.coords.latitude, this.coords.longitude]);
    const options: MarkerOptions = this.getDefaultMarkerOptions();
    this.positionMarkerLayer = marker(coordinates, options).addTo(this.map);
    const zoomValue: number = zoom ? zoom : this.map.getZoom();
    this.map.setView(coordinates, zoomValue);
  }
  private clearMarkerLayer() {
    if (this.map.hasLayer(this.positionMarkerLayer)) {
      this.map.removeLayer(this.positionMarkerLayer);
    }
  }
  private getDefaultMarkerOptions(): MarkerOptions {
    const options: MarkerOptions = {
      icon: this.getDefaultMarkerIcon(),
      title: `Latitude: ${formatNumber(this.coords.latitude, 'en-US', '1.1-7')}\nLongitude: ${formatNumber(this.coords.longitude, 'en-US', '1.1-7')}`,
      riseOnHover: true
    };
    return options;
  }
  private getDefaultMarkerIcon(): Icon {
    return icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: 'assets/marker-icon.png'
    });
  }

  public onClickFindAndCenterUserLocation(): void {
    this.findAndCenterUserLocation.emit();
  }

  public onMapClick(e: LeafletMouseEvent) {
    if (e.type === 'click') {
      this.updateCoordinates(e.latlng);
      const zoom = this.getZoomOfCloseView();
      this.updateLocationMarker(zoom);
    }
  }
  private updateCoordinates(latLng: LatLng): void {
    this.coords = new Coords(latLng.lat, latLng.lng);
    this.selectedLocationChange.emit(this.coords);
  }
  private getZoomOfCloseView(): number {
    const zoom: number = this.map.getZoom();
    if (zoom < this.DEFAULT_ZOOM) {
      return this.DEFAULT_ZOOM;
    }
    return zoom;
  }
}

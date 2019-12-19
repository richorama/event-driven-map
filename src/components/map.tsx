import React from 'react'
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

class MapComponent extends React.Component {

  map?: Map

  configureMap() {
    this.map = new Map({
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      target: 'map',
      view: new View({
        center: [0, 0],
        zoom: 2
      })
    });
  }

  componentDidMount() {
    this.configureMap()
  }

  render() {
    return <div id="map" style={{ width: '100%', height: '100%' }} />
  }

}

export default MapComponent
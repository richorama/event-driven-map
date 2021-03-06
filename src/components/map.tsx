import React from 'react'
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { messageTypes } from '../lib/messageTypes';
import GeoJSON from 'ol/format/GeoJSON';
import { OSM, Vector as VectorSource } from 'ol/source';
import { Circle as CircleStyle, Fill, Style } from 'ol/style';
import PubSub from 'pubsub-js'
import { Feature } from 'ol';

const pointStyle = new Style({
  image: new CircleStyle({
    radius: 8,
    fill: new Fill({ color: '#0D47A1' }),
  })
})

class MapComponent extends React.Component {

  map?: Map
  features: Feature[] = []
  tokens: any[] = []
  source?: VectorSource
  geoJson: any

  componentDidMount() {
    this.configureMap()
    this.configureSubscriptions()
  }

  componentWillUnmount() {
    this.tokens.forEach(PubSub.unsubscribe)
  }

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

    this.map.on('click', event => {
      const features: any[] = []
      this.map?.forEachFeatureAtPixel(event.pixel, feature => {
        features.push(feature)
      })
      if (features.length > 0) {
        const thisId = features[0].get('code')
        const originalFeature = this.geoJson.features.find((x: any) => x.properties.code === thisId)
        PubSub.publish(messageTypes.showSingleFeature, originalFeature)
      }
    })
  }

  subscribe = (messageType: messageTypes, func: Function) => {
    this.tokens.push(PubSub.subscribe(messageType, func))
  }

  configureSubscriptions() {
    this.subscribe(messageTypes.dataLoaded, this.dataLoaded)
    this.subscribe(messageTypes.filterByMag, this.filterByMag)
    this.subscribe(messageTypes.showAllFeatures, this.showAllFeatures)
    this.subscribe(messageTypes.showSingleFeature, this.showSingleFeature)
  }

  filterByMag = (_: any, message: any) => {
    this.source?.clear()
    const { mag } = message
    const filteredFeatures = this.features.filter(x => Math.floor(x.get('mag')) === mag)
    this.source?.addFeatures(filteredFeatures)
    this.map?.getView().setCenter(this.source?.getExtent())
  }

  showAllFeatures = () => {
    this.source?.clear()
    this.source?.addFeatures(this.features)

    this.map?.getView().setZoom(2)
  }

  showSingleFeature = (_:any, feature: any) => {
    console.log(feature)
    this.source?.clear()
    const f = this.features.find(x => x.get('code') === feature.properties.code) ?? new Feature()
    if (f) this.source?.addFeature(f)

    this.map?.getView().setCenter(this.source?.getExtent())
    this.map?.getView().setZoom(10)
  }

  dataLoaded = (_: any, geoJson: any) => {
    this.geoJson = geoJson
    this.features = new GeoJSON({ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' }).readFeatures(geoJson)
    this.source = new VectorSource({
      features: this.features
    });

    var vectorLayer = new VectorLayer({
      source: this.source,
      style: this.styleFunction
    });

    this.map?.addLayer(vectorLayer)
  }

  styleFunction = () => pointStyle

  render() {
    return <div id="map" style={{ width: '100%', height: '100%' }} />
  }

}

export default MapComponent
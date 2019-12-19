import React from 'react'
import { messageTypes } from '../lib/messageTypes'
import PubSub from 'pubsub-js'
import MagSelector from './magSelector'
import ShowFeatures from './showFeatures'
import ShowFeature from './showFeature'

enum mode {
  'showAll',
  'showMag',
  'showFeature'
}

type IState = {
  geoJson: any
  loading: boolean
  mode: mode
  mag: number
  feature: any
}

class Sidebar extends React.Component<{}, IState> {

  constructor(props: any) {
    super(props)
    this.state = {
      geoJson: {},
      loading: true,
      mode: mode.showAll,
      mag: 0,
      feature: {}
    }
  }

  tokens: any[] = []

  componentDidMount() {
    this.configureSubscriptions()
  }

  componentWillUnmount() {
    this.tokens.forEach(PubSub.unsubscribe)
  }

  configureSubscriptions() {
    this.subscribe(messageTypes.dataLoaded, this.dataLoaded);
    this.subscribe(messageTypes.filterByMag, this.filterByMag);
    this.subscribe(messageTypes.showAllFeatures, this.showAllFeatures)
    this.subscribe(messageTypes.showSingleFeature, this.showFeature)
  }

  subscribe = (messageType: messageTypes, func: Function) => {
    this.tokens.push(PubSub.subscribe(messageType, func))
  }

  filterByMag = (_: any, message: any) => {
    const { mag } = message
    this.setState({ mag, mode: mode.showMag })
  }

  showAllFeatures = () => this.setState({ mode: mode.showAll })

  showFeature = (_: any, feature: any) => this.setState({ mode: mode.showFeature, feature })

  dataLoaded = (_: any, geoJson: any) => {
    this.setState({ geoJson, loading: false, mode: mode.showAll })
  }

  render() {
    if (this.state.loading) return <>Loading...</>
    return <div>
      <h3 style={{ marginTop: 0 }}>{this.state.geoJson.features.length} Earthquakes</h3>
      {this.state.mode === mode.showAll && <MagSelector geoJson={this.state.geoJson} />}
      {this.state.mode === mode.showMag && <ShowFeatures title={`Magnitude ${this.state.mag} - ${this.state.mag + 1}`} features={this.state.geoJson.features.filter((x: any) => Math.floor(x.properties.mag) === this.state.mag)} />}
      {this.state.mode === mode.showFeature && <ShowFeature feature={this.state.feature} />}
    </div>
  }
}

export default Sidebar
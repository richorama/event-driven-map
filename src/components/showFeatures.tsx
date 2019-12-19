import React from 'react'
import { Feature } from 'ol'
import PubSub from 'pubsub-js'
import { messageTypes } from '../lib/messageTypes'

type IProps = {
  features: Feature[]
  title: string
}

class ShowFeatures extends React.Component<IProps> {

  handleClickFeature = (feature: any) => PubSub.publish(messageTypes.showSingleFeature, feature)

  handleShowAll = () => PubSub.publish(messageTypes.showAllFeatures, {})

  renderFeature = (feature: any, index: number) => {
    return <div key={index} style={{ paddingBottom: 8 }}>
      <div><a href="javascript:void(0);" onClick={this.handleClickFeature.bind(null, feature)}>{feature.properties.place}</a></div>
      <small>Mag {feature.properties.mag}</small>
    </div>
  }

  render() {
    return <>
      <h5>{this.props.title}</h5>
      <div style={{ paddingBottom: 12 }}><a href="javascript:void(0);" onClick={this.handleShowAll} >Show All</a></div>
      {this.props.features.map(this.renderFeature)}
    </>
  }
}

export default ShowFeatures

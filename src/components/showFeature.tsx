import React from 'react'
import PubSub from 'pubsub-js'
import { messageTypes } from '../lib/messageTypes'

type IProps = {
  feature: any
}

class ShowFeature extends React.Component<IProps> {

  handleShowAll = () => PubSub.publish(messageTypes.showAllFeatures, {})


  render() {
    const { feature } = this.props
    return <>
      <h5>{feature.properties.title}</h5>
      <div style={{ paddingBottom: 12 }}><a href="javascript:void(0);" onClick={this.handleShowAll} >Show All</a></div>

    </>
  }
}

export default ShowFeature

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
    return <tr key={index} style={{ paddingBottom: 8 }}>
      <td>
        <div><a href="javascript:void(0);" onClick={this.handleClickFeature.bind(null, feature)}>{feature.properties.place}</a></div>
        <small>Mag {feature.properties.mag}</small>
      </td>
    </tr>
  }

  render() {
    return <>
      <div style={{ paddingBottom: 12 }}><a href="javascript:void(0);" onClick={this.handleShowAll} >Show All</a></div>
      <h5>{this.props.title}</h5>
      <table className="ui table">
        <tbody>{this.props.features.map(this.renderFeature)}</tbody>
      </table>
    </>
  }
}

export default ShowFeatures

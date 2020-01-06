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
      <div style={{ paddingBottom: 12 }}><button className="link-button" onClick={this.handleShowAll} >Show All</button></div>
      <h5>{feature.properties.title}</h5>
      <table className="ui table">
        <tbody>
          <tr>
            <td className="label">Magnitude</td>
            <td>{feature.properties.mag}</td>
          </tr>
          <tr>
            <td className="label">Time</td>
            <td>{new Date(feature.properties.time).toLocaleDateString()} {new Date(feature.properties.time).toLocaleTimeString()}</td>
          </tr>
          <tr>
            <td className="label">Location</td>
            <td>{feature.properties.place}</td>
          </tr>
          <tr>
            <td colSpan={2}><a href={feature.properties.url} target="_blank" rel="noopener noreferrer">More Information</a></td>
          </tr>
        </tbody>
      </table>

    </>
  }
}

export default ShowFeature

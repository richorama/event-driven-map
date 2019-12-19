import React from 'react'
import PubSub from 'pubsub-js'
import { messageTypes } from '../lib/messageTypes'

type IProps = {
  geoJson: any
}

class MagSelector extends React.Component<IProps> {

  handleSelectMag = (mag: number) => {
    PubSub.publish(messageTypes.filterByMag, { mag })
  }

  renderMag = (value: number) => {
    const count = this.props.geoJson.features.filter((x: any) => Math.floor(x.properties.mag) === value).length
    return <tr key={value}>
      <td>
        <a onClick={this.handleSelectMag.bind(null, value)} href="javascript:void(0);">Mag {value} to {value + 1} ({count})</a>
      </td>
    </tr>
  }

  render() {
    const magRange = this.props.geoJson.features
      .map((x: any) => x.properties.mag)
      .map((x: any) => Math.floor(x))

    const maxMag = Math.max(...magRange)

    const values: number[] = []
    for (let i = 0; i <= maxMag; i++) {
      values.push(i)
    }

    return <>
      <h5>By Magnitude</h5>
      <table className="ui table">
        <tbody>
          {values.map(this.renderMag)}
        </tbody>
      </table>
    </>
  }
}

export default MagSelector

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
    return <div key={value}>
      <a onClick={this.handleSelectMag.bind(null, value)} href="javascript:void(0);">Mag {value} to {value + 1} ({count})</a>
    </div>
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
      {values.map(this.renderMag)}
    </>
  }
}

export default MagSelector

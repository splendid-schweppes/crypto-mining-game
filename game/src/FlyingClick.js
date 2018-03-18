import React, { Component } from 'react'
import {connect} from 'react-redux'
import {uniqueId} from 'lodash'

import './FlyingClick.css'

const clickSize = 50 / 2

class FlyingClick extends Component {
    constructor() {
    super()
    this.state = {
      clicks: []
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({clicks: [...this.state.clicks, nextProps.latestClick]})
  }

  renderFlying(click) {
    const style = {top: click.y - clickSize, left: click.x - clickSize}
    return (
      <div key={uniqueId()} className="flying-click" style={style}>
      </div>
    )
  }

  render() {
    console.log('this.props here', this.props.latestClick)
    return (
      <div>
        {this.state.clicks.map(this.renderFlying)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    latestClick: state.clicks.latestClick,
  }
}

export default connect(mapStateToProps)(FlyingClick)

import React, { Component } from 'react'
import {connect} from 'react-redux'
import {reject} from 'lodash'

import './FlyingClick.css'

const clickSize = 50 / 2

class FlyingClick extends Component {
    constructor() {
    super()
    this.state = {
      clicks: []
    }

    this.handleRemove = this.handleRemove.bind(this)
    this.renderFlying = this.renderFlying.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({clicks: [...this.state.clicks, nextProps.latestClick]})
  }

  handleRemove(id) {
    const newItems = reject(this.state.clicks, {id})
    this.setState({items: newItems});
  }

  renderFlying(click, i) {
    const style = {top: click.y - clickSize, left: click.x - clickSize}

    return (
      <div
        key={click.id}
        className="flying-click"
        style={style}
        onAnimationEnd={() => this.handleRemove(click.id)}
      />
    )
  }

  render() {
    if (!this.props.latestClick.x) {
      return null
    }

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

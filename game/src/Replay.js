import React, { Component } from 'react'
import {connect} from 'react-redux'
import {random, extend, uniqueId} from 'lodash'

class Replay extends Component {
  render() {
    return (
      <div style={{marginTop: '100px'}}>
        <button onClick={() => this.props.replayClicks(this.props.clicks)}>
          Replay
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    clicks: state.clicks.data
  }
}

const wot = ({dispatch, click, i}) => {
  setTimeout(() => {
    dispatch({type: 'REPLAY_CLICK', click: extend({}, click, {id: uniqueId(click.id)})})
  }, random(i * 100, i * 140))
}

const mapDispatchToProps = (dispatch, props) => ({
  replayClicks: clicks => {
    clicks.map((click, i) =>
      wot({dispatch, click, i})
    )
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Replay)

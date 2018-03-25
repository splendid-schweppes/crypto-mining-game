import React, { Component } from 'react'
import {connect} from 'react-redux'

import './InvisibleElement.css'

class InvisibleElement extends Component {
  render() {
    return (
      <div className="traveler">
        <div className="bouncer" onClick={this.props.getCoin}></div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  getCoin: () => {
    dispatch({type: 'GET_COIN'})
  }
})

export default connect(null, mapDispatchToProps)(InvisibleElement)

import React, { Component } from 'react'
import {connect} from 'react-redux'
import {ToastContainer, toast} from 'react-toastify'

import './InvisibleElement.css'

class InvisibleElement extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }

    this.hiddenBonustNotification = this.hiddenBonustNotification.bind(this)
    this.hiddenElementBonus = this.hiddenElementBonus.bind(this)
  }

  hiddenBonustNotification = () => toast.success('HIDDEN BONUS ACQUIRED!')

  hiddenElementBonus () {
    this.props.getSpecialBonus()
    this.hiddenBonustNotification()
  }


  render() {
    return (
      <div className="traveler" onClick={this.hiddenElementBonus}>
        <div className="bouncer"></div>
        <ToastContainer autoClose={5000} position="bottom-right" />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  getSpecialBonus: () => {
    dispatch({type: 'GET_SPECIALBONUS'})
  }
})

export default connect(null, mapDispatchToProps)(InvisibleElement)

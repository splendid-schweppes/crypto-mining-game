import React, { Component } from 'react'
import {connect} from 'react-redux'
import {ToastContainer, toast} from 'react-toastify'

import './InvisibleElement.css'

class InvisibleElement extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }

    this.getHiddenElementBonus = this.getHiddenElementBonus.bind(this)
  }


  getHiddenElementBonus () {
    this.props.getSpecialBonus(this.props.achievements.length)
    toast('HIDDEN BONUS ACQUIRED!', {
      type: toast.TYPE.SUCCESS,
      autoClose: 5000
    });
  }


  render() {
    return (
      <div className="traveler" onClick={this.getHiddenElementBonus}>
        <div className="bouncer"></div>
        <ToastContainer position="bottom-right" />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    achievements: state.achievements
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  getSpecialBonus: (level) => {
    dispatch({type: 'GET_SPECIALBONUS', level})
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(InvisibleElement)

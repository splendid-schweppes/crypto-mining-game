import { Component } from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
import {get} from 'lodash'

import {decrease_treshold_seconds} from './Config'

class DecreaseHashingRate extends Component {
  componentDidMount() {
    setInterval(() => {
      const time = get(this, 'props.latestClick.time', moment().subtract(1, 'year'))
      const diff_in_milliseconds = moment().diff(time)

      if (diff_in_milliseconds / 1000 > decrease_treshold_seconds) {
        this.props.decreaseHashingRate()
      }

    }, 1000)
  }

  render() {
    return null
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  decreaseHashingRate: () =>
    dispatch({
      type: 'DECREASE_HASHING_RATE'
    })
})

const mapStateToProps = state => {
  return {
    latestClick: state.clicks.latestClick
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DecreaseHashingRate)

import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import Layout from './Layout'

const mapStateToProps = state => ({
  userValues: state.trip.userValues,
  distance: state.trip.distance,
  isFetching: state.trip.isFetchingDistance,
})

const mapDispatchToProps = dispatch => ({
  onBackToHome() {
    dispatch(push('/'))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Layout)

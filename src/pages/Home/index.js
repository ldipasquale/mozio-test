import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import { saveUserValues, calculateDistance } from 'store/trip/actions'
import LocationService from 'services/Location'

import Layout from './Layout'

const mapDispatchToProps = dispatch => ({
  onCalculateDistance(userValues) {
    dispatch(saveUserValues(userValues))

    dispatch(push('/results'))

    const distance = LocationService.getDistance(userValues.from.geometry.location, userValues.to.geometry.location)

    dispatch(calculateDistance(distance))
  },
})

export default connect(null, mapDispatchToProps)(Layout)

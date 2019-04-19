import types from './types'

const saveUserValues = values => ({
  type: types.SAVE_USER_VALUES,
  payload: values,
})

const calculateDistance = distance => ({
  type: types.CALCULATE_DISTANCE,
  payload: distance,
})

export {
  saveUserValues,
  calculateDistance,
}

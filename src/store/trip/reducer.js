import types from './types'

const initialState = {
  isFetchingDistance: true,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SAVE_USER_VALUES:
      return {
        ...state,
        userValues: action.payload,
      }

    case types.CALCULATE_DISTANCE:
      return {
        ...state,
        distance: action.payload,
        isFetchingDistance: false,
      }

    default:
      return state
  }
}

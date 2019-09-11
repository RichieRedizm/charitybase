import { GET_CHARITIES, SET_LOADING } from '../types'

export default (state, action) => {
  switch (action.type) {
    case GET_CHARITIES:
      return {
        ...state,
        charities: action.payload,
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}

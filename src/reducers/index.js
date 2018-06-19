import * as types from '../actions/constants'

const defaultState = {
  favorites: [],
  random: {},
  quotes: [],
  isPending: undefined
}

const addFavorite = (state = defaultState, action) => {
  return { ...state, favorites: [...state.favorites, action.quote] }
}

const addRandom = (state = defaultState, action) => {
    return {...state, random: {...action.quote}}
}

const addQuotes = (state = defaultState, action) => {
  return { ...state, quotes: [...action.data], isPending: false }
}

const callPending = (state = defaultState, action) => {
  return { ...state, isPending: true }
}

const callFail = (state = defaultState, action) => {
  return { ...state, error: action.error }
}

export default (state = defaultState, action) => {
  const actionsHandler = {
    [types.ADD_FAVORITE]: addFavorite,
    [types.ADD_RANDOM]: addRandom,
    [types.ADD_QUOTES]: addQuotes,
    [types.CALL_API]: callPending,
    [types.CALL_FAIL]: callFail
  }

  const reducer = actionsHandler[action.type]

  return reducer ? reducer(state, action) : state
}

import * as types from './constants'
import {apiCall} from '../services/getQuote'

export const addFavorite = quote => {
    return {
        type: types.ADD_FAVORITE,
        quote
    }
}

export const addQuotes = data => {
    return {
        type: types.ADD_QUOTES,
        data
    }
}

export const addRandom =  quote => {
    return {
        type: types.ADD_RANDOM,
        quote
    }
}
export const callPending = () => (dispatch) => {
    apiCall('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=25')
    .then(data => {
        dispatch(addRandom(data[0]))
        dispatch(addQuotes(data.slice(1, data.length)))
    })
}

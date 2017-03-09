import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
    console.log('reducer_weather with state: ', state, 'action: ', action)
    switch (action.type) {
        case FETCH_WEATHER:
            console.log([action.payload.data, ...state])
            return [action.payload.data, ...state]
    }
    return state;
}
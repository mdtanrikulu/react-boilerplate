import { combineReducers } from 'redux'
import asyncLoad from './asyncLoad'
import setSearch from './setSearch'
import clickEvent from './clickEvent'
import { routerReducer } from 'react-router-redux'

const reducer = combineReducers({
    asyncLoad,
    setSearch,
    clickEvent,
    routing: routerReducer
})

export default reducer
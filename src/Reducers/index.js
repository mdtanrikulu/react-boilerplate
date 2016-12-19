import { combineReducers } from 'redux'
import asyncLoad from './asyncLoad'
import setSearch from './setSearch'
import clickEvent from './clickEvent'

const reducer = combineReducers({
    asyncLoad,
    setSearch,
    clickEvent
})

export default reducer
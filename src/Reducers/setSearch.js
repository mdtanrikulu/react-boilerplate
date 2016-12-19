const initialState = {
    search: ''
}
const setSearch = (state = initialState, action) => {
    switch (action.type) {
    case 'SET_SEARCH':
        state.search = action.search
        return Object.assign({}, state, {
            search: action.search
        });
    default:
        return state
    }
}

export default setSearch
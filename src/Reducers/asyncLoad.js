const initialState = {
    status: true
}
const asyncLoad = (state = initialState, action) => {
    switch (action.type) {
    case 'ASYNC_LOAD':
        return Object.assign({}, state, {
            status: false
        });
    default:
        return state
    }
}

export default asyncLoad
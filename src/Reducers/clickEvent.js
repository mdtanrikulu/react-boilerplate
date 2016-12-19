const initialState = {
    signIn: null
}
const clickEvent = (state = initialState, action) => {
    switch (action.type) {
    case 'SIGN_IN_CLICK':
        return Object.assign({}, state, {
            signIn: action.condition
        });
    default:
        return state
    }
}

export default clickEvent
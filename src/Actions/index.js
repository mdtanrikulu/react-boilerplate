export const asyncLoad = () => {
    return {
        type: 'ASYNC_LOAD'
    }
}

export const setSearch = (search) => {
    return {
        type: 'SET_SEARCH',
        search
    }
}

export const signInClick = (condition) => {
    return {
        type: 'SIGN_IN_CLICK',
        condition
    }
}
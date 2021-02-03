const initialState = {
    data: null,
    loading: false,
    error: null
}

export function userReducer(state = initialState, action){
    switch (action.type){
        case 'START_LOADING':
            return {
                ...state, loading: true
            }
        case 'UPDATE_USER_DATA':
            return {
                ...state, data: action.payload, loading: false
            }
        case 'UPDATE_ERROR':
            return {
                ...state, error: action.payload
            }
            // break;
        default:
            return state;
    }
}
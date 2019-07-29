import { GET_VERSION } from '../constant'

const initialState = {
    version: '1.0'
}

function rootReducer(state = initialState, action) {
    console.log('action', action)
    switch (action.type) {
        case GET_VERSION:

            return { version: state.version }
        case 'TEST_API':
            console.log({
                ...state,
                data: action.payload
            })
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}

export default rootReducer
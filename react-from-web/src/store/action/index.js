import { GET_VERSION } from '../constant'
import axios from 'axios'

export const getVersion = (payload) => {
    return { type: 'GET_VERSION', payload: payload }
}

const updateState = (payload) => {
    return { type: 'TEST_API', payload: payload }
}

async function callApi() {
    const result = await fetch('/api/posts')
    return result
}

export const testApi = () => {
    return async dispatch => {
        const result = await axios.get('/api/posts')
        //return { type: 'TEST_API', payload: result.data }
        dispatch(updateState(result.data))
    }
}

// export const testApi = () => {
//     return dispatch => {
//         axios.get('/api/posts').then((response => {
//             console.log(response.data)
//         }))
//         //dispatch(successHandle(response))
//     }
// }


// export const testApi = (resolve) => {
//     return () => {
//         fetch('/api/posts')
//             .then(function (response) {
//                 return response.json();
//             })
//             .then(function (myJson) {
//                 resolve(myJson)
//             });
//     }
// }


import * as ApiService from '../services/ApiService';

/*
You must export the defined actions so that the reducer has access
export const EXAMPLE_ACTION = 'EXAMPLE_ACTION';

*/

// BASIC ACTIONS
// export function exampleAction(something) {
//     return {
//         type: EXAMPLE_ACTION,
//         something: something
//     };
// }

// THUNK ACTIONS
// export function exampleApiCall() {
//     return function (dispatch) {
//         return ApiService.getSomething().then((response) => {
//            dispatch(exampleAction(response.data));
//         });
//     }
// }
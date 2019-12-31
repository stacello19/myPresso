import {get} from './amplify';
const querystring = require('querystring');

export const checkApi = (params) => {
    let querystrings = querystring.stringify(params)
    get(`/api-index?${querystrings}`)
}
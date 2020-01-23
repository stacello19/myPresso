import {get} from './amplify';
const querystring = require('querystring');

export const checkApi = async (params) => {
    let querystrings = querystring.stringify(params)
    const name= await get(`/api-index?${querystrings}`);
    return name;
}

export const getTopFive = async (params) => {
    // let obj = {
    //     1: 'gp',
    //     2: 'jack jack',
    //     3: 'stacy'
    // }
    
    // let queryString = querystring.stringify(obj)
    let querystrings = querystring.stringify(params);
    // 
    const topFive = await get(`/topfive?${querystrings}`);
    return topFive;
}
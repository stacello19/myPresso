import {get} from './amplify';
const querystring = require('querystring');

export const checkApi = async (params) => {
    let querystrings = querystring.stringify(params)
    const name= await get(`/api-index?${querystrings}`);
    return name;
}

export const getTopFive = async (params) => {
    let querystrings = querystring.stringify(params);
    const topFive = await get(`/topfive?${querystrings}`);
    return topFive;
}

export const getReview = async (params) => {
    let querystrings = querystring.stringify(params);
    const review = await get(`/review?${querystrings}`);
    return review;
}
export const getOrder = async (params) => {
    let querystrings = querystring.stringify(params);
    await get(`/order?${querystrings}`);
}
export const deleteReview = async (params) => {
    let querystrings = querystring.stringify(params);
    const review = await get(`/review?${querystrings}`);
    return review;
}
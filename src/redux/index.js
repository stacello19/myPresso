//import coffeePic from '../components/shared/image/public/coffee-cup.png';
import {checkApi, getTopFive, getReview, deleteReview} from '../components/lib/api';

//Action types:
const ORDER_CAPSULE = 'ORDER_CAPSULE';
const DIARY_CAPSULE = 'DIARY_CAPSULE';
const REMOVE_ORDER_CAPSULE= 'REMOVE_ORDER_CAPSULE';
const CONNECTFB= 'CONNECTFB';
const CONNECTTOPFIVE = 'CONNECTTOPFIVE';
const RESETNAME = 'RESETNAME';
const RESETREVIEW = 'RESETREVIEW';
const REMOVEREVIEW = 'REMOVEREVIEW';

//Action creator:
const orderCapsule = (orders) => {
    return{
        type: 'ORDER_CAPSULE',
        orders
    }
}

const sendFb = (name, topfive, review) => {
    return{
        type: 'CONNECTFB',
        name,
        topfive,
        review
    }
}
const removeReview = (reviewing) => {
    return{
        type: 'REMOVEREVIEW',
        reviewing
    }
}
const sendTopFive = (topfives) => {
    return {
        type: 'CONNECTTOPFIVE',
        topfives
    }
}
const resettingName = () => {
    return {
        type: 'RESETNAME',     
    }
}
const resettingReview = () => {
    return {
        type: 'RESETREVIEW',     
    }
}
const diaryCapsule = (reviews) => {
    return{
        type: 'DIARY_CAPSULE',
        reviews
    }
}

const removeCapsule = (newOrder) => {
    return{
        type: 'REMOVE_ORDER_CAPSULE',
        newOrder
    }
}

//thunk
export const orderDiaryCapsule = (order) => dispatch => {
    dispatch(orderCapsule(order))
}

export const removedReview = (data) => async dispatch => {
    const response = await deleteReview(data);
    console.log(response)
    dispatch(removeReview(response.review))
}
//getting user from front to AWS
export const sentFb = (data) => async dispatch => {
    const response = await checkApi(data);
    dispatch(sendFb(response.body, response.topFive, response.review))
}
//topfive from front to AWS
export const sentTopFive = (data) => async dispatch => {
    const response = await getTopFive(data);
    dispatch(sendTopFive(response.topfive))
}
export const resetName = () => dispatch => {
    dispatch(resettingName())
}
export const resetReview = () => dispatch => {
    dispatch(resettingReview())
}
export const diaryCoffee = (coffeeDiary) => async dispatch => {
    const response = await getReview(coffeeDiary);
    dispatch(diaryCapsule(response.review))
}
export const removeOrder = (newOrder) => dispatch => {
    dispatch(removeCapsule(newOrder))
}




//initialState
const initialState={
    orderArr: [],
    review: [],
    name: '',
    topfive: []
}

//reducer
export const reducers = (state=initialState, action) => {
    switch(action.type) {
        case ORDER_CAPSULE:
            return{
                ...state,
                orderArr: [...state.orderArr, action.orders]
            }
        case DIARY_CAPSULE:
            return{
                ...state,
                review: [...state.review, action.reviews]
            }
        case REMOVEREVIEW:
            return{
                ...state,
                review: action.reviewing
            }
        case REMOVE_ORDER_CAPSULE:
            return{
                ...state,
                orderArr: action.newOrder
            }
        case CONNECTFB:
            return{
                ...state,
                name: action.name,
                topfive: action.topfive,
                review: action.review
            }
        case CONNECTTOPFIVE:
            return {
                ...state,
                topfive: action.topfives
            }
        case RESETNAME:
            return {
                ...state,
                name: ''
            }
        case RESETREVIEW:
            return {
                ...state,
                review: []
            }
        default:
            return state
    }
}
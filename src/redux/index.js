import coffeePic from '../components/shared/image/public/coffee-cup.png';
import {checkApi, getTopFive} from '../components/lib/api';

//Action types:
const ORDER_CAPSULE = 'ORDER_CAPSULE';
const DIARY_CAPSULE = 'DIARY_CAPSULE';
const REMOVE_ORDER_CAPSULE= 'REMOVE_ORDER_CAPSULE';
const CONNECTFB= 'CONNECTFB';
const CONNECTTOPFIVE = 'CONNECTTOPFIVE';
const RESETNAME = 'RESETNAME';
//Action creator:
const orderCapsule = (orders) => {
    return{
        type: 'ORDER_CAPSULE',
        orders
    }
}
const sendFb = (name, topfive) => {
    return{
        type: 'CONNECTFB',
        name,
        topfive
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
const diaryCapsule = (diary) => {
    return{
        type: 'DIARY_CAPSULE',
        diary
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

//getting user from front to AWS
export const sentFb = (data) => async dispatch => {
    const response = await checkApi(data);
    dispatch(sendFb(response.body, response.topFive))
}
//topfive from front to AWS
export const sentTopFive = (data) => async dispatch => {
    const response = await getTopFive(data);
    dispatch(sendTopFive(response.topfive))
}
export const resetName = () => dispatch => {
    dispatch(resettingName())
}
export const diaryCoffee = (coffeeDiary) => dispatch => {
    dispatch(diaryCapsule(coffeeDiary))
}
export const removeOrder = (newOrder) => dispatch => {
    dispatch(removeCapsule(newOrder))
}




//initialState
const initialState={
    orderArr: [{orderNum:'4', name: 'Americano', price:'4.50'},{orderNum:'2', name: 'Latte', price:'5.50'}],
    diaryArr: [{rating: '3', comment: 'This is perfect for morning Coffee', name: 'Tumeric Latte', image: `${coffeePic}`},{rating: '5', comment: 'Heavenly Taste Coffee!!!!', name: 'Capuccino', image: `${coffeePic}`}],
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
                diaryArr: [...state.diaryArr, action.diary]
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
                topfive: action.topfive
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
        default:
            return state
    }
}
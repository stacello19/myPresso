import {checkApi, getTopFive, getReview, deleteReview, allOrder} from '../components/lib/api';
 
//Action types:
const ORDER_CAPSULE = 'ORDER_CAPSULE';
const DIARY_CAPSULE = 'DIARY_CAPSULE';
const REMOVE_ORDER_CAPSULE= 'REMOVE_ORDER_CAPSULE';
const CONNECTFB= 'CONNECTFB';
const CONNECTTOPFIVE = 'CONNECTTOPFIVE';
const RESETNAME = 'RESETNAME';
const RESETREVIEW = 'RESETREVIEW';
const REMOVEREVIEW = 'REMOVEREVIEW';
const RESETORDER = 'RESETORDER';
const ALLORDER = 'ALLORDER';
//Action creator:
const allOrdering = (ordering) => {
   return{
       type: 'ALLORDER',
       ordering
   }
}
const orderCapsule = (order) => {
   return{
       type: 'ORDER_CAPSULE',
       order
   }
}
const resetOrder = () => {
    return{
        type: 'RESETORDER'
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
export const allOrdered = (order) => async dispatch => {
   const response = await allOrder(order);
   dispatch(allOrdering(response.order))
}
export const orderDiaryCapsule = (order) => async dispatch => {
   dispatch(orderCapsule(order))
}

export const removedReview = (data) => async dispatch => {
   const response = await deleteReview(data);
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
export const resettingOrder = () => dispatch => {
    dispatch(resetOrder())
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
   allorder: [],
   order: [{qty: 1, name: "Coffee", price: "0.85"}],
   review: [],
   name: '',
   topfive: []
}
 
//reducer
export const reducers = (state=initialState, action) => {
   switch(action.type) {
       case ALLORDER:
           return{
               ...state,
               allorder: action.ordering
           }
       case ORDER_CAPSULE:
           //state에 넣는거
           return{
               ...state,
               order: [...state.order, action.order]
           }
       case RESETORDER:
           //session에서 다 갖고오는거
           return {
               ...state,
               order: [{qty: 1, name: "Coffee", price: "0.85"}]
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

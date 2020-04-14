import {checkApi, getTopFive, getReview, deleteReview} from '../components/lib/api';

//Action types:
const DIARY_CAPSULE = 'DIARY_CAPSULE';
const CONNECTFB= 'CONNECTFB';
const CONNECTTOPFIVE = 'CONNECTTOPFIVE';
const RESETNAME = 'RESETNAME';
const RESETREVIEW = 'RESETREVIEW';
const REMOVEREVIEW = 'REMOVEREVIEW';

//Action creator:
 
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
//thunk

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
    console.log('redux-------', data)
   const response = await getTopFive(data);
   console.log('response -------', response.topfive)
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

 
 
 
 
//initialState
const initialState={
   allorder: [],
   review: [],
   name: '',
   topfive: []
}
 
//reducer
export const reducers = (state=initialState, action) => {
   switch(action.type) {

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

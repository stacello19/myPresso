import {get} from './amplify';

// export const checkApi = (params) => get('/api-index', params)
export const checkApi = () => get('/api-index?gp=gp&stacy=stacy')
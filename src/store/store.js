import {createStore} from 'redux'
import contactReducers from '../reducers/contactReducers'


const store =  createStore (contactReducers);


export default store;
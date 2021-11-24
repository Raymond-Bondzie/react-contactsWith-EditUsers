import {createStore, compose, applyMiddleware, combineReducers} from 'redux'
import contactReducers from '../reducers/contactReducers'
import firebase from '../Firebase/config';
import { getFirebase, reduxReactFirebase, firebaseReducer } from 'react-redux-firebase';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import thunk from 'redux-thunk';

const reducers= combineReducers({
    contacts: contactReducers,
    firebase: firebaseReducer,
})



const store =  createStore (reducers , compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxReactFirebase(firebase),
    reduxFirestore(firebase)
));


export default store;
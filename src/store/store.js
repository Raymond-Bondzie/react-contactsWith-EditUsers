import {createStore, compose, applyMiddleware} from 'redux'
import contactReducers from '../reducers/contactReducers'
import firebase from '../Firebase/config';
import { getFirebase, reduxReactFirebase } from 'react-redux-firebase';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import thunk from 'redux-thunk';

const store =  createStore (contactReducers , compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxReactFirebase(firebase),
    reduxFirestore(firebase)
));


export default store;
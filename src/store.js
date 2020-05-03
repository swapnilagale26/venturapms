import { createStore, combineReducers, compose } from "redux";
import { reduxFirestore, firestoreReducer } from "redux-firestore";
import firebase from "firebase";
import "firebase/firestore";
import { firebaseReducer, reactReduxFirebase } from "react-redux-firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA50FGbkzz_chnFscyh4kyJHcFe0dsSfJg",
  authDomain: "venturapms-428d0.firebaseapp.com",
  databaseURL: "https://venturapms-428d0.firebaseio.com",
  projectId: "venturapms-428d0",
  storageBucket: "venturapms-428d0.appspot.com",
  messagingSenderId: "337181753668",
  appId: "1:337181753668:web:e5d488689dc5baa6509711",
  measurementId: "G-F5HK6QGFYE",
};

//react redux firebas config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};

//Init firebase instance
firebase.initializeApp(firebaseConfig);

//Init Firestore
const firebase = firebase.firestore();

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

const initialState = {};

const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// const rrfProps = {
//   firebase,
//   config: rrfConfig,
//   dispatch: store.dispatch,
//   // createFirestoreInstance // <- needed if using firestore
// };

export default store;

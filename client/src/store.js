import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/reducer';

const middleware=[thunk];
const initialState={}

// const store=createStore(rootReducer,
//     initialState,
//     compose(
//         applyMiddleware(...middleware),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
//     );
let store;
if(process.env.NODE_ENV === 'production') {
    store = createStore(rootReducer, initialState, compose(
        applyMiddleware(...middleware)
    ));
  } else {
    store = createStore(rootReducer, initialState, compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));
  }

export default store;
import { createStore } from 'redux'
import counter from '../reducer/counter';
import rootReducer from '../reducer/rootReducer';


const store=createStore(rootReducer);

export default store;
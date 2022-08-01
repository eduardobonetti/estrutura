import {combineReducers} from 'redux';

import pedidoReducer from './pedido-reducer';

const appReducer = combineReducers({
  pedido: pedidoReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGGED_OUT') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;

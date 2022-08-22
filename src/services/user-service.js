import {Store} from '../store';
import {UserAction as Action} from '_actions';

export const reducerKey = 'user';

export const login = payload => {
  Store.dispatch({
    type: Action.SET,
    payload,
  });
};

export const logout = () => {
  Store.dispatch({
    type: Action.LOGOUT,
  });
};

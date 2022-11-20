import { Action, State } from "../types";


export const initialState = {
  loading: false,
  error: false,
  data: {},
};

export const reducerLogin = (state: State, action: Action): State => {
  if (action.type === 'request') {
    return {
      loading: true,
      error: false,
      data: {},
    }
  }
  if (action.type === 'success') {
    return {
      ...state,
      loading: false,
      data: action.results,
    }
  }
  if (action.type === 'error') {
    return {
      loading: false,
      error: true,
      data: action.error,
    }
  };
  return state;
};

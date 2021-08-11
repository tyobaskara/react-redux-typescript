import { TodosAction } from './todos.actions';
import { todosActionTypes } from './todos.types';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface TodosState {
  list: Todo[];
  loading: boolean;
  error: string;
}

const initialState = {
  list: [],
  loading: false,
  error: ''
}

export const todosReducer = (state: TodosState = initialState, action: TodosAction): TodosState => {
  switch (action.type) {
    case todosActionTypes.SET_TODOS_LIST:
      return {
        ...state,
        list: action.payload
      }
    case todosActionTypes.SET_TODOS_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    case todosActionTypes.SET_TODOS_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
};

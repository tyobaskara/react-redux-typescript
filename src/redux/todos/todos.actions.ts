import { Dispatch } from 'redux';
import axios from 'axios';
import get from 'lodash/get';
import { Todo } from './todos.reducer';
import { todosActionTypes } from './todos.types';

export interface TodosListAction {
  type: todosActionTypes.SET_TODOS_LIST,
  payload: Todo[]
}

interface TodosLoadingAction {
  type: todosActionTypes.SET_TODOS_LOADING,
  payload: boolean
}

interface TodosErrorAction {
  type: todosActionTypes.SET_TODOS_ERROR,
  payload: string
}

export type TodosAction = 
  | TodosListAction
  | TodosLoadingAction
  | TodosErrorAction;

export const setTodosListAction = (payload: Todo[]): TodosListAction => ({
  type: todosActionTypes.SET_TODOS_LIST,
  payload
});

export const setTodosLoadingAction = (payload: boolean): TodosLoadingAction => ({
  type: todosActionTypes.SET_TODOS_LOADING,
  payload
});

export const setTodosErrorAction = (payload: string): TodosErrorAction => ({
  type: todosActionTypes.SET_TODOS_ERROR,
  payload
});

export const fetchTodosList = () => {
  return async (dispatch: Dispatch<TodosAction>): Promise<void> => {
    dispatch(setTodosLoadingAction(true));

    try {
      const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const list = get(result, 'data', []);

      dispatch(setTodosLoadingAction(false));
      dispatch(setTodosListAction(list))
    } catch (error) {
      dispatch(setTodosLoadingAction(false));
      dispatch(setTodosErrorAction('Something went wrong'));
    }
  }
}

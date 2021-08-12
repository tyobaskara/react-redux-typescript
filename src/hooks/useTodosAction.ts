import { useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import * as todosActions from '../redux/todos/todos.actions';

export const useTodosAction = () => {
  // https://react-redux.js.org/api/hooks#usedispatch
  const dispatch = useDispatch();

  return bindActionCreators(todosActions, dispatch);
};

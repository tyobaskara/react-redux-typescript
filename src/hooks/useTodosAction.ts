import { useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import * as todosActions from '../redux/todos/todos.actions';

export const useTodosAction = () => {
  const dispatch = useDispatch();

  return bindActionCreators(todosActions, dispatch);
};

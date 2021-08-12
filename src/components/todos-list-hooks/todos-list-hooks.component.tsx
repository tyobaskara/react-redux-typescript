import React from 'react'
import { _useSelector } from '../../hooks/_useSelector';
import { selectTodosList, selectTodosError, selectTodosLoading } from '../../redux/todos/todos.selector';
import { useTodosAction } from '../../hooks/useTodosAction';
import useFetchTodos from '../../hooks/useFetchTodos';

const TodosListHooks = () => {
  // without memoized
  // const { list, loading, error } = _useSelector(state => state.todos);
  
  // with memoized
  const list = _useSelector(selectTodosList);
  const loading = _useSelector(selectTodosLoading);
  const error = _useSelector(selectTodosError);

  // call fetchTodosList action
  useFetchTodos();
  
  // using bindActionCreators(TodosActions, dispatch)
  // const { fetchTodosList, setTodosErrorAction, setTodosListAction, setTodosLoadingAction } = useTodosAction();
  const { fetchTodosList } = useTodosAction();
  
  const onClick = () => fetchTodosList();

  return (
    <div>
      <h1>useSelector & useDispatch</h1>
      <h2>TodosListHooks</h2>

      <p>loading = {loading ? 'True' : 'False'}</p>
      <p>error = {error ? error : 'No Error'}</p>
      <p>todos.list.length = {list.length}</p>

      <button onClick={onClick}>fetchList</button>
    </div>
  )
}

export default TodosListHooks;

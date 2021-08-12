import React from 'react'
import { _useSelector } from '../../hooks/_useSelector';
import { useTodosAction } from '../../hooks/useTodosAction';
import useFetchTodos from '../../hooks/useFetchTodos';

const TodosListHooks = () => {
  const { list, loading, error } = _useSelector(state => state.todos);

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

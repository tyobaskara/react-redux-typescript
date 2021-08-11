import React from 'react'
import { _useSelector } from '../../hooks/_useSelector';
import { useTodosAction } from '../../hooks/useTodosAction';


const TodosListHooks = () => {
  const { fetchTodosList } = useTodosAction();
  const todos = _useSelector(state => state.todos);
  console.log('todos', todos);
  
  const onClick = () => fetchTodosList();

  return (
    <div>
      <h1>useSelector & useDispatch</h1>
      <h2>TodosListHooks</h2>
      <p>todos.list.length = {todos.list.length}</p>
      <button onClick={onClick}>fetchList</button>
    </div>
  )
}

export default TodosListHooks;

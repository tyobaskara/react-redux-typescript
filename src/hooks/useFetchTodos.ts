import { useEffect } from 'react';
import { fetchTodosList } from './../redux/todos/todos.actions';
import { useDispatch } from 'react-redux';

const useFetchTodos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodosList())
  }, [dispatch])
};

export default useFetchTodos;

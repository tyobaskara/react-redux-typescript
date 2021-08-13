import { useEffect, useState } from 'react';
import axios from 'axios';
import get from 'lodash/get';

export interface Todo {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

interface Todos {
  list: Todo[];
  loading: boolean;
  error: string;
}

const useJsonPlaceholderTodos = (): Todos => {
  const [todos, setTodos] = useState({
    list: [],
    loading: false,
    error: ''
  });

  useEffect(() => {
    const fetchTodos = async () => {
      setTodos(current => ({
        ...current,
        loading:true
      }));

      try {
        const result = await axios.get('https://jsonplaceholder.typicode.com/todos');
        const data = get(result, 'data', []);

        setTodos(current => ({
          ...current,
          list: data,
          loading: false
        }));
      } catch (error) {
        setTodos(current => ({
          ...current,
          loading: false,
          error: 'Something went wrong!'
        }));
      }
    };

    console.log('fetchTodos');

    fetchTodos();
  }, []);

  return todos;
}

export default useJsonPlaceholderTodos;

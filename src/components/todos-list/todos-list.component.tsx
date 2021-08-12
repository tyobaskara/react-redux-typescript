import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../redux/root-reducer';
import { Todo } from '../../redux/todos/todos.reducer';
import { fetchTodosList, TodosAction } from '../../redux/todos/todos.actions';
import { selectTodosList, selectTodosLoading, selectTodosError } from '../../redux/todos/todos.selector';

interface TodosListProps {
  todosList: Todo[];
  fetchList: () => Promise<void>;
  todosLoading: boolean;
  todosError: string;
}

type Action =
  | TodosAction;
  // | TodosAction; // can put another actions here

type MyThunkDispatch = ThunkDispatch<RootState, undefined, Action>;

const TodosList = (props: TodosListProps) => {
  const { fetchList, todosLoading, todosError, todosList } = props;

  useEffect(() => {
    fetchList();
  }, [fetchList]);
  
  const onClick = () => fetchList();

  return (
    <div>
      <h1>{'{'} connect {'}'} from 'react-redux'</h1>
      <h2>TodosList</h2>

      <p>loading = {todosLoading ? 'True' : 'False'}</p>
      <p>error = {todosError ? todosError : 'No Error'}</p>
      <p>todos.list.length = {todosList.length}</p>

      <button onClick={onClick}>fetchList</button>
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  todosList: selectTodosList(state),
  todosLoading: selectTodosLoading(state),
  todosError: selectTodosError(state)
});

const mapDispatchToProps = (dispatch: MyThunkDispatch) => ({
  fetchList: () => dispatch(fetchTodosList())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);

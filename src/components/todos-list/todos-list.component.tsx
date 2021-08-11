import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../redux/root-reducer';
import { Todo } from '../../redux/todos/todos.reducer';
import { fetchTodosList, TodosAction } from '../../redux/todos/todos.actions';
import { selectTodosList } from '../../redux/todos/todos.selector';

interface TodosListProps {
  todosList: Todo[];
  fetchList: () => Promise<void>;
}

type MyThunkDispatch = ThunkDispatch<RootState, undefined, TodosAction>;

const TodosList = (props: TodosListProps) => {

  useEffect(() => {
    console.log('props.todosList', props.todosList);
  }, [props.todosList]);
  
  const onClick = () => props.fetchList();

  return (
    <div>
      <h1>{'{'} connect {'}'} from 'react-redux'</h1>
      <h2>TodosList</h2>
      <p>todos.list.length = {props.todosList.length}</p>
      <button onClick={onClick}>fetchList</button>
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  todosList: selectTodosList(state)
});

const mapDispatchToProps = (dispatch: MyThunkDispatch) => ({
  fetchList: () => dispatch(fetchTodosList())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);

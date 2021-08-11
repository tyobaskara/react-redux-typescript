import { todosReducer } from './todos/todos.reducer';
import { combineReducers } from "redux";

const reducers = combineReducers({
  todos: todosReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;

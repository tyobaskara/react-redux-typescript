import { createSelector } from "reselect";
import { RootState } from "../root-reducer";
import { TodosState } from "./todos.reducer";

const selectTodos = (state: RootState): TodosState => state.todos;

export const selectTodosList = createSelector(
  [selectTodos],
  (todos) => todos.list
);

export const selectTodosLoading = createSelector(
  [selectTodos],
  (todos) => todos.loading
);

export const selectTodosError = createSelector(
  [selectTodos],
  (todos) => todos.error
);

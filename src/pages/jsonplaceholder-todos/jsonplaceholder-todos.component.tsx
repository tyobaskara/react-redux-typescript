import React, { FC, useState, useMemo } from 'react';
import useJsonPlaceholderTodos from '../../hooks/useJsonPlaceholderTodos';
import { Todo } from '../../hooks/useJsonPlaceholderTodos';

interface SummaryProps {
  incompleteList: Todo[];
  completeList: Todo[];
  loading: boolean;
  error: {
    message: string
  };
}

const Summary: FC<SummaryProps> = React.memo(({
  incompleteList, 
  completeList,
  loading,
  error
}) => {
  console.log('Summary rendered');

  return loading ? (<p>Loading..</p>) : (
    <div>
      <p>You got {incompleteList.length} incomplete todos</p>
      <p>You got {completeList.length} complete todos</p>
      {error.message && <p>{error.message}</p>}
    </div>
  );
});

const JsonPlaceholderTodos: FC = () => {
  const [count, setCount] = useState(0);
  const { list, loading, error } = useJsonPlaceholderTodos();
  console.log('render JsonPlaceholderTodos');

  const incompleteList: Todo[] = useMemo(() => list.filter(item => item.completed === false), [list]);
  const completeList: Todo[] = useMemo(() => list.filter(item => item.completed === true), [list]);

  const onClick = () => {
    setCount(current => current + 1);
  };

  return (
    <div>
      <h1>JsonPlaceholderTodos</h1>

      <p>count: {count}</p>
      <button onClick={onClick}>Add Count</button>

      <Summary 
        incompleteList={incompleteList}
        completeList={completeList}
        loading={loading}
        error={useMemo(() => ({ message: error }), [error])}
      />
    </div>
  )
}

export default JsonPlaceholderTodos;

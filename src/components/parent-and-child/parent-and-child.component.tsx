import React, { FC, useCallback, useMemo, useState } from 'react'

interface Skill {
  name: string
}

interface ChildProps {
  title?: string;
  onClick?: () => void;
  user?: {
    name: string
  };
  skills?: Skill[]
}

const ChildComponent: FC<ChildProps> = React.memo((props) => {
  const { title, onClick, user, skills } = props;
  console.log('child rendered');

  return (
    <div>
      <h3>Child Component</h3>
      <p>
        {title && <span>{`title = ${title}`}</span>}
        {user && <span> {user.name}</span>}
      </p>
      
      {skills && (
        <ul>
          {skills.map((skill: Skill) => <li key={skill.name}>{skill.name}</li>)}
        </ul>
      )}

      {onClick && <button onClick={onClick} >Count from child</button>}
    </div>
  )
});

const heavyProcess = (): number => {
  let count = 0;
  
  for (let i = 0; i < 1000; i++) {
    count++
  }

  console.log('heavyProcess', count);

  return count;
}

interface User {
  name: string
}

type John = User | undefined;

const ParentAndChild: FC = () => {
  const [count, setCount] = useState(0);
  const [skills, setSkills] = useState([{
    name: 'frontEnd'
  }]);

  const onClick = (): void => {
    setCount(current => current + 1);
  };

  const memoizedOnClick = useCallback(onClick, []);

  // const john = (data: Users[]) => {
  //   console.log('find John');
  //   return data.find(user => user.name === 'John')
  // };
  const john = useMemo((): John => {
    const users = [{
      name: 'John'
    }, {
      name: 'Doe'
    }];

    console.log('find John');
    heavyProcess();
    return users.find(user => user.name === 'John')
  }, []);

  const mySkills = useMemo(() => {
    console.log('mySkills');
    heavyProcess();
    
    return skills;
  }, [skills]);

  const onAddSkill = () => {
    setSkills(current => [
      ...current,
      {
        name: 'BackEnd'
      }
    ])
  }

  console.log('parent rendered');
  return (
    <div>
      <h1>Parent Component</h1>
      <h2>React Hooks Optimization</h2>
      <p>Count: {count}</p>
      <button onClick={onClick}>Add Count</button>
      <button onClick={onAddSkill}>Add Skill</button>

      <ChildComponent 
        title='Hello' 
        onClick={memoizedOnClick} 
        user={john} 
        skills={mySkills}
      />

      <p>------------</p>

      <ChildComponent />
    </div>
  )
}

export default ParentAndChild

import { useReducer } from 'react';

function reducer(state, action) {
  if (action.type === 'incremented_age') {
    return {
    //   age: state.age + 1
    ...state,age :state.age+1
    };
  }
  else if (action.type === 'decrement_age') {
    return {
    //   age: state.age + 1
    ...state,age :state.age-1
    };
  }
  throw Error('Unknown action.');
}

export default function DemoForuseReducer() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });

  return (
    <>
      <button onClick={() => {
        dispatch({ type: 'incremented_age' })
      }}>
        Increment age
      </button>
      <button onClick={() => {
        dispatch({ type: 'decrement_age' })
      }}>
        Decrement age
      </button>
      <p>Hello! You are {state.age}.</p>
    </>
  );
}

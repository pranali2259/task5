 import {useEffect,useReducer} from 'react'
 import Form from './Form';
import './App.css'

function App() {
  const initialstate=0;
  const reducer=(state,action)=>{
    switch(action){
      case 'increment': 
        return  state+1 ;
        case 'decrement':
          return state-1;
          case 'reset':
          return state*0;
        default :state;
    }
  }
  const [state,dispatch]=useReducer(reducer,initialstate);
 
  return (
    <>
    <h1>Counter</h1>
      <p>{state}</p>
      <button onClick={()=>dispatch("increment")}>increment</button>
      <button onClick={()=>dispatch("decrement")}>decrement</button>
      <button onClick={()=>dispatch("reset")}>reset</button>
      <br />
      <Stopwatch/>
      <Form/>
  
    </>
  )
}
 
const Stopwatch = () => {
  const initialState = {
    Running: false,
    time: 0,  
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'start':
        return { ...state, Running: true };
      case 'stop':
        return { ...state, Running: false };
      case 'reset':
        return { Running: false, time: 0 };
      case 'count':
      return { ...state, time: state.time + 1 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { Running, time } = state;

   
  useEffect(() => {
    let timer;
    if (Running) {
      timer = setInterval(() => {
       dispatch({ type: 'count' });
      }, 1000);
    }
    return () => clearInterval(timer);  
  }, [Running]);

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>{time} seconds</p>  
      <button onClick={() => dispatch({ type: 'start' })} disabled={Running}>
        Start
      </button>
      <button onClick={() => dispatch({ type: 'stop' })} disabled={!Running}>
        Stop
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>
        Reset
      </button>
    </div>
  );
};

export default App

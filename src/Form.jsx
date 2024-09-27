import { useReducer, useState } from "react";
import React from 'react'

const Form = () => {
    const initialState = { Firstname: '', LastName: '', age: '' };
  
    const reducer = (state, action) => {
      switch (action.type) {
        case 'changeFirstname':
          return { ...state, Firstname: action.payload };
        case 'changeLastName':
          return { ...state, LastName: action.payload };
        case 'changeAge':
          return { ...state, age: action.payload };
        default:
          return state;
      }
    };
  
    const [state, dispatch] = useReducer(reducer, initialState);
    const [lists, setlist] = useState([]);
  
    const addlist = () => {
      const newList = {
        Firstname: state.Firstname,
        LastName: state.LastName,
        age: state.age,
      };
      
      setlist((prevLists) => [...prevLists, newList]); 
      dispatch({ type: 'changeFirstname', payload: '' });
      dispatch({ type: 'changeLastName', payload: '' });
      dispatch({ type: 'changeAge', payload: '' });
    };
  
    return (
      <div>
        <h1>Form</h1>
        <input
          type="text"
          value={state.Firstname}
          onChange={(e) => dispatch({ type: 'changeFirstname', payload: e.target.value })}
        />
        <input
          type="text"
          value={state.LastName}
          onChange={(e) => dispatch({ type: 'changeLastName', payload: e.target.value })}
        />
        <input
          type="text"
          value={state.age}
          onChange={(e) => dispatch({ type: 'changeAge', payload: e.target.value })}
        />
        <button onClick={addlist}>Add Item</button>
        <h4>List</h4>
        <ul style={{ display: "flex", flexDirection: "column" }}>
          {lists.map((list, index) => (
            <li key={index}>
              {list.Firstname} {list.LastName}, Age: {list.age}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Form;
import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isFocused,setIsfocused] = useState(false);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0) {
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  const inputFocusHandler = () =>{
    setIsfocused(true);
  }

  const inputBlurHandler = () =>{
    setIsfocused(false)
  }
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        <label >Course Goal</label>
        <input type="text" 
        onChange={goalInputChangeHandler} 
        onFocus={inputFocusHandler}
        onBlur ={inputBlurHandler}
        />
      </div>
      <Button type="submit"  isFocused={isFocused}>Add Goal</Button>
    </form>
  );
};

export default CourseInput;

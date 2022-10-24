import { useState } from "react";

const Form = () => {

    const [enteredName,setEnteredName]=useState('');
    const [enteredAge,setEnteredAge]=useState('');
    const [enteredBio,setEnteredBio]=useState('');

    const nameChangeHandler=(event)=>{
        setEnteredName(event.target.value);
    };

    const ageChangeHandler=(event)=>{
        setEnteredAge(event.target.value);
    }

    const bioChangeHandler=(event)=>{
        setEnteredBio(event.target.value);
    }

    const submitHandler=(event)=>{
        event.preventDefault();

        const expenseData={
            name:enteredName,
            age:enteredAge,
            bio:enteredBio
        }
        console.log(expenseData);
    };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Name:</label>
        <input type="text" onChange={nameChangeHandler}/>

        <label>Age:</label>
        <input type="text" onChange={ageChangeHandler}/>

        <label>Bio:</label>
        <input type="text" onChange={bioChangeHandler}/>
      </div>
      <div>
        <button>submit</button>
      </div>
    </form>
  );
};

export default Form;

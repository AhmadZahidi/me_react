const Form = () => {

    const nameChangeHandler=(event)=>{
        console.log(event.target.value);
    };

    const ageChangeHandler=(event)=>{
        console.log(event.target.value);
    }

    const bioChangeHandler=(event)=>{
        console.log(event.target.value);
    }

  return (
    <form>
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

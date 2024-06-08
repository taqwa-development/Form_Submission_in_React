import React, { useState } from "react";

const FormTwo = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name.firstName, name.lastName);
  }
  return (
    <div>
      {name.firstName} - {name.lastName}
      <form action="">
        <h2>Registration Form</h2>
        <label htmlFor="firstName">
          First Name
          <input
            onChange={(e) => setName({ ...name, firstName: e.target.value })}
            type="text"
            value={name.firstName}
          />
        </label>
        <label htmlFor="lastName">
          Last Name
          <input
            onChange={(e) => setName({ ...name, lastName: e.target.value })}
            type="text"
            value={name.lastName}
          />
        </label>
        <input onClick={(e) => handleSubmit(e)} type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FormTwo;

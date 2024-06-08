import React, { useState } from "react";

const Form = () => {
  const [user, setUser] = useState("");
  // function handleChange (e) {
  //     setUser(e.target.value)
  //     console.log(e)
  // }
  return (
    <div>
      <form action="">
        <h2>Log In</h2>
        <input
          onChange={(e) => setUser(e.target.value)}
          type="text"
          value={user}
          placeholder="Enter Your Name"
        />
      </form>
    </div>
  );
};

export default Form;

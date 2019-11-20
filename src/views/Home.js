import React, { useState } from "react";
import Form from "../components/Form";
import UserForm from "../components/UserForm";

export default function Home(props) {
  const [values, setValues] = useState({
    name: "",
    email: ""
  })

  const handleChange = event => setValues({...values, [event.target.name]: event.target.value})

  const handleSubmit = e => {
    e.preventDefault();
    console.log(values);
  }

  return (
    <Form submit={handleSubmit}>
      <UserForm handleChange={handleChange} />
    </Form>
  );
}

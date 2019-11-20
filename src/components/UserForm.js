import React from "react";
import Card from "./Card";
import "./index.css";
import { SimpleInput, Button } from "./Inputs";

export default function UserForm(props) {
  const { handleChange } = props;
  return (
    <Card class="card">
      <h2>Login!</h2>
      <SimpleInput
        type="text"
        placeholder="Enter Name"
        name="name"
        onChange={handleChange}
      />
      <SimpleInput
        type="email"
        placeholder="Enter Email"
        name="email"
        onChange={handleChange}
      />
      <Button type="submit">
        Submit Form
      </Button>
    </Card>
  );
}

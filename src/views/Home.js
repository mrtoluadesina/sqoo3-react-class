import React from 'react';
import Card from '../components/Card';
import { SimpleInput } from '../components/Inputs';

export default function Home(props) {
  return (
    <Card>
      <h2>Login!</h2>
      <SimpleInput type="text" placeholder="Enter Name" name="name" />
      <SimpleInput type="email" placeholder="Enter Email" name="email" />
    </Card>
  )
}
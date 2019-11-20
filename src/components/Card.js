import React from 'react';

export default function Card(props) {
  return (
    <div className={props.class}>
      {props.children}
    </div>
  )
}
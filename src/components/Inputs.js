import React from 'react';

export const SimpleInput = props => <input {...props} />

export const TextArea = props => <textarea {...props}></textarea>

export const Button = props => <button {...props}>{props.children}</button>
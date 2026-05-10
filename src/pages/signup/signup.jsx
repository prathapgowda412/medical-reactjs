import React from 'react';
import SignUpForm from '../../components/forms/signupform/signUpForm';

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

export default function SignupPage() {
  return <SignUpForm />;
}

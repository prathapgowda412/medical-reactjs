import React from 'react';
import Layout from '../../components/layout/layout';

import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/20/solid';
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

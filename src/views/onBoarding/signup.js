import React from 'react';
import SignUpForm from '../../components/Auth/SignUpForm/SignUp';
import '../../scss/components/_onboardingForms.scss';

const SignUp = () => {
  return (
    <div className="main-form-page-wrapper">
      <SignUpForm />
    </div>
  );
};

export default SignUp;
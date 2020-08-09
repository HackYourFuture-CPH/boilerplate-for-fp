import React, { useState } from 'react';
import { signUp } from '../../firebase/auth';
import UserCreationSuccess from '../../components/Success/UserCreationSuccess';
import SignUp from '../../components/Forms/SignUp';
import Loader from '../../components/Loader';

function validateInput({ password, passwordConfirm }) {
  return password === passwordConfirm;
}

export default function SignUpContainer() {
  const [isSuccessful, setisSuccessful] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async ({ email, password, passwordConfirm }) => {
    setIsLoading(true);
    const isValid = validateInput({ password, passwordConfirm });
    if (!isValid) {
      setIsLoading(false);
      return alert("Passwords doesn't match");
    }
    const isSignedUp = await signUp({ email, password });
    setIsLoading(false);
    if (isSignedUp) setisSuccessful(true);
  };
  if (isLoading) return <Loader />;
  if (isSuccessful) return <UserCreationSuccess />;
  return <SignUp onSubmit={onSubmit} />;
}

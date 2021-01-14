import React, { useState } from 'react';
import UserCreationSuccess from '../../components/Success/UserCreationSuccess';
import SignUp from '../../components/Forms/SignUp';
import Loader from '../../components/Loader';
import { useFirebase } from '../../firebase/FirebaseContext';

const getDoesPasswordsMatch = ({ password, passwordConfirm }) =>
  password === passwordConfirm;

export default function SignUpContainer() {
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { signUp } = useFirebase();

  const onSubmit = async ({ email, password, passwordConfirm }) => {
    setIsLoading(true);
    const doesPasswordsMatch = getDoesPasswordsMatch({
      password,
      passwordConfirm,
    });
    if (!doesPasswordsMatch) {
      setIsLoading(false);
      alert("Passwords doesn't match");
      return;
    }
    const isSignedUp = await signUp({ email, password });
    setIsLoading(false);
    if (isSignedUp) setIsSuccessful(true);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isSuccessful) {
    return <UserCreationSuccess />;
  }

  return <SignUp onSubmit={onSubmit} />;
}

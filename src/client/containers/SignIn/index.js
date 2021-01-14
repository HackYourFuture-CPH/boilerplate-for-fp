import React, { useState } from 'react';

import SignIn from '../../components/Forms/SignIn';
import Loader from '../../components/Loader';
import { useFirebase } from '../../firebase/FirebaseContext';

export default function SignInContainer() {
  const [isLoading, setIsLoading] = useState(false);
  const { signIn } = useFirebase();

  const onSubmit = async ({ email, password }) => {
    setIsLoading(true);
    await signIn({ email, password });
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loader />;
  }

  return <SignIn onSubmit={onSubmit} />;
}

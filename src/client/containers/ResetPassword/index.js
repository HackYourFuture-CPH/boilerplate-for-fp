import React, { useState } from 'react';

import ResetPassword from '../../components/Forms/ResetPassword';
import Loader from '../../components/Loader';
import { useFirebase } from '../../firebase/FirebaseContext';

export default function ResetPasswordContainer() {
  const [isLoading, setIsLoading] = useState(false);
  const { resetPassword } = useFirebase();

  const onSubmit = async ({ email }) => {
    setIsLoading(true);
    await resetPassword({ email });
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loader />;
  }

  return <ResetPassword onSubmit={onSubmit} />;
}

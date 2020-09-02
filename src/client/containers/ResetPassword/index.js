import React, { useState } from 'react';
import { resetPassword } from '../../firebase/auth';
import ResetPassword from '../../components/Forms/ResetPassword';
import Loader from '../../components/Loader';

export default function ResetPasswordContainer() {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async ({ email }) => {
    setIsLoading(true);
    await resetPassword({ email });
    setIsLoading(false);
  };
  if (isLoading) return <Loader />;
  return <ResetPassword onSubmit={onSubmit} />;
}

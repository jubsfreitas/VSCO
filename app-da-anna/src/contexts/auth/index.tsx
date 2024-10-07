import React, { useCallback, useEffect, useState } from 'react';
import { getAuth, User } from 'firebase/auth';
import { auth } from '../../middlewares/firebase';
import createCTX from '../../utils/createContex';

interface AuthProviderInterface {
  user: User | null;
  isAuth: boolean;
  isLoaded: boolean;
  isResale: boolean;
}

const [useAuthContext, AuthProviderContext] =
  createCTX<AuthProviderInterface>();

const AuthProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState<User | null>(getAuth().currentUser);
  const [isResale, setIsResale] = useState(false);

  useEffect(() => {
    user
      ?.getIdTokenResult()
      .then((results) => {
        setIsLoaded(true);
        const { claims } = results;
        setIsResale(!!claims.resale || !!claims.admin);
      })
      .catch(() => {
        setIsLoaded(true);
      })
      .finally(() => {
        setIsLoaded(true);
      });
  }, [user]);

  const useHandles = useCallback((user: User | null) => {
    setIsLoaded(true);
    setUser(user);
  }, []);

  useEffect(() => {
    return auth.onAuthStateChanged(useHandles);
  }, [useHandles]);

  useEffect(() => {
    return auth.onIdTokenChanged(useHandles);
  }, [useHandles]);

  const value: AuthProviderInterface = {
    isLoaded,
    user,
    isAuth: !!user,
    isResale,
  };

  if (!isLoaded) {
    return <h1>Autenticando ...</h1>;
  }

  return <AuthProviderContext value={value}>{children}</AuthProviderContext>;
};

export default useAuthContext;
export { AuthProvider };

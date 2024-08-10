import { useState, useEffect } from 'react';
import { auth } from "@/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function useAuth(router) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        router.push('/login');
      }
    });
  }, [router]);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());
      const user = result.user;
      setUser(user);
    } catch (error) {
      console.error(error);
    }
  };

  return { user, handleLogin };
}
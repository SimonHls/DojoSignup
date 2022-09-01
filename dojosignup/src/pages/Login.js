import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/home");
  }, [user, loading]);

  return (
    <div className=" mt-3 min-h-screen min-w-full flex justify-center items-center bg-gray-100">
      <div className=" flex flex-col text-center bg-white p-10 rounded-md shadow-md">
        <h1 className="mb-6 text-lg font-light">Bei DojoSignup anmelden</h1>
        <input
          type="text"
          className="login-textbox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login-textbox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="p-3 text-sm mb-3 text-white bg-black hover:bg-gray-800 rounded-md"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <button className="p-3 text-sm mb-3 text-white bg-blue-500 hover:bg-blue-600 rounded-md" onClick={signInWithGoogle}>
          Mit Google Account anmelden
        </button>
        <div className="font-light hover:text-blue-500 underline cursor-pointer text-gray-700 text-sm mt-2">
          <Link to="/reset">Passwort zurücksetzen</Link>
        </div>
        <div className="font-light text-sm text-gray-700 mt-2">
          Noch keinen Account? <Link to="/register" className="underline hover:text-blue-500 cursor-pointer">Hier registrieren.</Link>
        </div>
      </div>
    </div>
  );
}
export default Login;
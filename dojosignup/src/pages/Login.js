import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/home");
  }, [user, loading, navigate]);

  return (
    <div className=" min-h-screen min-w-full flex justify-center items-center bg-gradient-to-br from-red-400 to-pink-400">
      <div className=" flex flex-col text-center bg-white p-10 rounded-md shadow-md">
        <h1 className="mb-6 text-lg font-light">Bei DojoSignup anmelden</h1>
        <input
          type="text"
          spellCheck="false"
          className="login-textbox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Addresse"
        />
        <input
          type="password"
          className="login-textbox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Passwort"
        />
        <button
          className="p-3 mt-3 text-sm mb-3 text-white bg-red-800 hover:bg-red-700 rounded-md"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <p className="font-light text-sm mt-2 mb-4 text-gray-700">
          oder mit einem externem Anbieter anmelden
        </p>
        <button className="p-3 text-sm mb-3 text-white bg-blue-600 hover:bg-blue-500 rounded-md" 
                onClick={signInWithGoogle}>
          Mit Google anmelden
        </button>
        <div className="font-light hover:text-blue-500 underline cursor-pointer text-gray-700 text-sm mt-2">
          <Link to="/reset">Passwort zurücksetzen</Link>
        </div>
        <div className="font-light text-sm text-gray-700 mt-4">
          <p>Noch keinen Account?</p>
          <Link to="/register" className="underline hover:text-blue-500 cursor-pointer">Hier registrieren.</Link>
        </div>
      </div>
    </div>
  );
}
export default Login;
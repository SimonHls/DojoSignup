import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useNavigate();

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) history.replace("/dashboard");
  }, [user, loading]);

  return (
    <div className=" h-screen min-w-full flex justify-center items-center bg-gray-100">
      <div className="flex flex-col text-center bg-white p-8 rounded-lg shadow-md">
        <h1 className="mb-6 text-lg font-light">Neues Benutzerkonto erstellen</h1>
        <input
          type="text"
          className="register-textbox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <input
          type="text"
          className="register-textbox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="register-textbox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="p-3 mt-3 text-sm mb-3 text-white bg-green-700 hover:bg-green-600 rounded-md" 
                onClick={register}>
          Konto erstellen
        </button>
        <p className="font-light text-sm mt-2 mb-4 text-gray-700">
          oder mit einem externem Anbieter registrieren
        </p>
        <button
          className="p-3 text-sm mb-3 text-white bg-blue-600 hover:bg-blue-500 rounded-md"
          onClick={signInWithGoogle}
        >
          Mit Google registrieren
        </button>
        <div className="font-light text-sm text-gray-700 mt-4">
          <p>Schon registriert?</p>
          <Link to="/" className="underline hover:text-blue-500 cursor-pointer">
            Hier anmelden
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Register;
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [persNr, setPersNr] = useState("");
  const [department, setDepartment] = useState("");
  const [user, loading] = useAuthState(auth);

  const [missingInputs, setMissingInputs] = useState(false);
  const navigate = useNavigate();

  const register = () => {
    if(username && firstName && lastName && department && persNr && email && password) {
      missingInputs && setMissingInputs(false);
      registerWithEmailAndPassword(username, firstName, lastName, department, persNr, email, password);
    }
    else {
      setMissingInputs(true);
    }
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/");
  }, [user, loading, navigate]);

  return (
    <div className=" h-screen min-w-full flex justify-center items-center bg-gradient-to-br from-emerald-300 to-cyan-400">
      <div className="flex flex-col text-center bg-white p-8 rounded-lg shadow-md">
        <h1 className="mb-6 text-lg font-light">Neues Benutzerkonto erstellen</h1>
        {missingInputs &&
          <p >
            bitte alle Eingabefelder ausfüllen!
          </p>
        }
        <input
          type="text"
          className="register-textbox"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Benutzername"
        />
        <input
          type="text"
          className="register-textbox"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Vorname"
        />
        <input
          type="text"
          className="register-textbox"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Nachname"
        />
        <input
          type="text"
          className="register-textbox"
          value={persNr}
          onChange={(e) => setPersNr(e.target.value)}
          placeholder="Personalnummer"
        />
        <input
          type="text"
          className="register-textbox"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          placeholder="Abteilung"
        />
        <input
          type="email"
          className="register-textbox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Addresse"
        />
        <input
          type="password"
          className="register-textbox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Passwort"
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
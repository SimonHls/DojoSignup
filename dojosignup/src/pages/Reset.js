import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "../firebase";

function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading, navigate]);
  return (
    <div className=" min-h-screen w-full flex justify-center items-center bg-gray-200">
      <div className="flex flex-col text-center p-8 bg-white shadow-md rounded-md">
        <h1 className="mb-6 text-lg font-light">Passwort zurücksetzen</h1>
        <input
          type="text"
          className=" reset-textbox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Addresse"
        />
        <button
          className="p-3 text-sm mb-3 text-white bg-blue-600 hover:bg-blue-500 rounded-md"
          onClick={() => sendPasswordReset(email)}
        >
          Reset Email senden
        </button>
        <div className=" font-light">
          Noch keinen account? <br/>
          <Link className="underline hover:text-blue-500 cursor-pointer" to="/register">Jetzt registrieren.</Link> 
        </div>
      </div>
    </div>
  );
}
export default Reset;
import React, {useState} from 'react'
import { useRecoilState } from 'recoil';
import { currentUserDataAtom } from '../../../atoms/currentUserDataAtom';
import Calendar from './Calendar.js'

function InputSection() {

  const [currentUserData, setCurrentUserData] = useRecoilState(currentUserDataAtom);

  const [submitFirstName, setSubmitFirstName] = useState("");
  const [submitLastName, setSubmitLastName] = useState("");
  const [submitPersNr, setSubmitPersNr] = useState("");
  const [submitDepartment, setSubmitDepartment] = useState("");
  const [submitDate, setSubmitDate] = useState();
  const [submitReason, setSubmitReason] = useState("");

  const insertPersonalData = () => {
    setSubmitFirstName(currentUserData.firstName);
    setSubmitLastName(currentUserData.lastName);
    setSubmitPersNr(currentUserData.persNr);
    setSubmitDepartment(currentUserData.department);
  }

  return (
    <div className='grid grid-cols-1 mt-8'>

      <h1 className=' text-xl font-bold'>Neue Dojoanmeldung</h1>

      <p className='font-light mt-6'>
        Termin auswählen
      </p>

      <Calendar />

      <p className='font-light mt-8 '>
        Persönliche Daten
      </p>

      <p
        className=" text-gray-400 underline font-light w-fit text-sm cursor-pointer hover:text-gray-500"
        onClick={() => insertPersonalData()}
      >
        Persönliche Daten aus Profil übertragen
      </p>

      <div className='sm:grid sm:grid-cols-2 mt-2 gap-4'>

        <div className=''>
          <div className='flex'>
            <p className='text-red-600'>*</p>
            <p className='ml-1 font-extralight text-sm text-gray-700'>Vorname</p>
          </div>
          <input
            type="text"
            spellCheck="false"
            className="signup-textbox"
            value={submitFirstName}
            onChange={(e) => setSubmitFirstName(e.target.value)}
            placeholder="Vorname"
          />
        </div>

      <div className=''>
        <div className='flex'>
          <p className='text-red-600'>*</p>
          <p className='ml-1 font-extralight text-sm text-gray-700'>Nachname</p>
        </div>
        <input
          type="text"
          spellCheck="false"
          className="signup-textbox"
          value={submitLastName}
          onChange={(e) => setSubmitLastName(e.target.value)}
          placeholder="Nachname"
        />
      </div>

      <div className=''>
        <div className='flex'>
          <p className='text-red-600'>*</p>
          <p className='ml-1 font-extralight text-sm text-gray-700'>Personalnummer</p>
        </div>
        <input
          type="text"
          spellCheck="false"
          className="signup-textbox"
          value={submitPersNr}
          onChange={(e) => setSubmitPersNr(e.target.value)}
          placeholder="Personalnummer"
        />
      </div>

      <div className=''>
      <div className='flex'>
          <p className='text-red-600'>*</p>
          <p className='ml-1 font-extralight text-sm text-gray-700'>Abteilung</p>
        </div>
        <input
          type="text"
          spellCheck="false"
          className="signup-textbox"
          value={submitDepartment}
          onChange={(e) => setSubmitDepartment(e.target.value)}
          placeholder="Abteilung"
        />
      </div>

      <div className='col-span-2'>
        <div className='flex'>
          <p className='text-red-600'>*</p>
          <p className='ml-1 font-extralight text-sm text-gray-700'>Grund der Teilnahme</p>
        </div>
        <textarea
          type="text"
          spellCheck="false"
          rows="2"
          className="signup-textbox"
          value={submitReason}
          onChange={(e) => setSubmitReason(e.target.value)}
          placeholder="Grund der Teilnahme"
        />
      </div>

      </div>
      <div className='relative min-w-full flex justify-end'>
        <div className=' p-4 mt-4 bg-gray-400 w-fit rounded-lg text-white hover:bg-green-500 cursor-pointer'>
          Termin buchen
        </div>
      </div>
      
    </div>
  )
}

export default InputSection
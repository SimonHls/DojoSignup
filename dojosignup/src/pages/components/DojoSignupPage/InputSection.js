import React, {useEffect, useState} from 'react'
import { useRecoilState } from 'recoil';
import { currentUserDataAtom } from '../../../atoms/currentUserDataAtom';
import { selectedDateAtom } from '../../../atoms/selectedDateAtom';
import Calendar from './Calendar.js'
import DojoDropdown from './DojoDropdown'
import { db } from '../../../firebase'
import { addDoc, collection } from 'firebase/firestore';
import { dojoSignupSelectedDojoAtom } from '../../../atoms/dojoSignupSelectedDojoAtom';
import moment from 'moment';


function InputSection() {

  const [currentUserData, setCurrentUserData] = useRecoilState(currentUserDataAtom);
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateAtom);
  const [selectedDojo, setSelectedDojo] = useRecoilState(dojoSignupSelectedDojoAtom);

  const [submitFirstName, setSubmitFirstName] = useState("");
  const [submitLastName, setSubmitLastName] = useState("");
  const [submitPersNr, setSubmitPersNr] = useState("");
  const [submitDepartment, setSubmitDepartment] = useState("");
  const [submitDate, setSubmitDate] = useState();
  const [submitReason, setSubmitReason] = useState("");
  const [inputIsValid, setInputIsValid] = useState(false);

  const insertPersonalData = () => {
    setSubmitFirstName(currentUserData.firstName);
    setSubmitLastName(currentUserData.lastName);
    setSubmitPersNr(currentUserData.persNr);
    setSubmitDepartment(currentUserData.department);
  }

  //pulls selected date from recoil to local state
  useEffect(() => {
    //Format fits database name structure
    const tempDate = moment(selectedDate).format('YYYY-MM-DD').toString() + "T09:00"
    setSubmitDate(tempDate);
  }, [selectedDate, submitDate])

  //checks, if every input field is filled. If so, allow submit.
  //Will also eventually check if the selected date has an available appointment
  useEffect(() => {
    //check if all fields have been filled
    if (submitFirstName !== "" &&
        submitLastName !== "" &&
        submitPersNr !== "" &&
        submitDepartment !== "" &&
        submitDate &&
        submitReason !== "") {
          // Eventually, something like isValidDate needs to be checked instead of submitDate
          setInputIsValid(true);
          //console.log("input is valid");
        }
        else {
          setInputIsValid(false);
          //console.log("input is incomplete");
        }
  }, [submitFirstName, submitLastName, submitPersNr, submitDepartment, submitDate, submitReason]);

  //Creates a new booking for the selected dojo at the selected date for the user
  const bookAppointment = async () => {
    if (inputIsValid) {
      try {
        //validate availability

        //submit user data to db
        const ref = collection(db, "/dojos/" + selectedDojo[1] + "/dojoDates/" + submitDate + "/signups");
        await addDoc((ref), {
           firstName: submitFirstName,
           lastName: submitLastName,
           persNr: submitPersNr,
           department: submitDepartment,
           reason: submitReason
        });
      }
      catch (err) {
        //fail -> document doesnt exist or connection not established
        console.log(err);
      }
    }
    else return;
  }

  return (
    <div className='grid grid-cols-1 mt-8'>

      <h1 className=' text-xl font-bold'>Neue Dojoanmeldung</h1>

      <p className='mt-4'>
        Dojo auswählen
      </p>

      <DojoDropdown />

      <p className='mt-6'>
        Termin auswählen
      </p>

      <Calendar />

      <p className='mt-6 '>
        Persönliche Daten
      </p>

      <p
        className="mt-2 text-gray-400 underline font-light w-fit text-sm cursor-pointer hover:text-gray-500"
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
      <div className='relative min-w-full flex justify-center'>
        <div className={`p-4 px-6 mt-4 rounded-lg text-white w-fit
          ${inputIsValid ?
            'bg-emerald-500  hover:bg-green-500 font-medium text-lg hover:shadow-md cursor-pointer transition-all ease-out'
            :
            'bg-gray-400 cursor-not-allowed font-medium text-lg'}`}
            onClick={() => bookAppointment()}
        >
          Termin buchen
        </div>
      </div>

    </div>
  )
}

export default InputSection
/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, CogIcon } from '@heroicons/react/solid'
import { useRecoilState } from 'recoil';
import { selectedDojoAtom } from '../../../atoms/selectedDojoAtom';
import { db } from "../../../firebase"
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {

  const [selectedDojo, setSelectedDojo] = useRecoilState(selectedDojoAtom);
  const [dojoList, setDojoList] = useState([])
  //const dojoList = ["Dojo Handfertigkeiten", "Dojo Messmittel", "Montagedojo", "Spaßdojo nur zum Spaß", "Dojo schweißen", "Dojo löten"]

  //firebase connections
  useEffect(() => {
		// listens for changes in the firestore db, returns new db state as snapshot
		const unsubscribe = onSnapshot(query(collection(db, 'dojos')), snapshot => {
			setDojoList(snapshot.docs);
		})
		// prevents multiple db listeners
		return unsubscribe;
	}, [db])

  const handleItemSelect = (name) => {
    setSelectedDojo(name);
  }

  return (
    dojoList.length > 0 ? (
      <div className='flex min-w-full justify-center'>
        <Menu as="div" className="inline-block mb-6 text-left ">

          {/* Menu closed */}
          <div className=''>
            <Menu.Button className="inline-flex w-72 h-12 justify-center items-center rounded-md border border-gray-300
                                  bg-white px-4 py-2 text-gray-700 shadow-sm
                                  hover:bg-gray-50 hover:cursor-pointer focus:outline-none transition ease-out
                                  ">
              <p className=' w-64 truncate text-base font-normal '>
                {selectedDojo === "" ? "Dojo auswählen" :  selectedDojo}
              </p>
              <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 right-0" aria-hidden="true" />
            </Menu.Button>

          </div>

          {/* Menu open */}
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >

            <Menu.Items className="absolute mt-1 w-72 origin-right rounded-md
                                bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none
                                  ">
              <div className="py-1 max-h-64 overflow-y-auto">

                {dojoList.map((dojo) => (
                  <div key={dojo.data().id}>
                    <Menu.Item>

                      {({ active }) => (
                        <p
                        onClick={ () => {(active && selectedDojo !== dojo.name)  && handleItemSelect(dojo.data().name)}}
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm hover:cursor-pointer truncate'
                          )}
                        >
                          {dojo.data().name}
                        </p>
                      )}

                    </Menu.Item>
                  </div>
                ))}

              </div>
            </Menu.Items>
          </Transition>

        </Menu>
      </div>
    ) : (
      <div className='flex min-w-full justify-center'>
        <div className="inline-flex w-72 h-12 justify-center items-center rounded-md border border-gray-300
                                    bg-white px-4 py-2 text-gray-700 shadow-sm mb-5">
          <CogIcon className="ml-2 mr-2 h-8 w-8 sticky right-0 animate-spin-slow text-blue-500" aria-hidden="true" />
          <p className='w-64 truncate text-base font-normal'>Dojos werden geladen...</p>
        </div>
      </div>

    )


  )
}

/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { useRecoilState } from 'recoil';
import { selectedDojoAtom } from '../atoms/selectedDojoAtom';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {

  const [selectedDojo, setSelectedDojo] = useRecoilState(selectedDojoAtom);
  const dojoList = ["Dojo Handfertigkeiten", "Dojo Messmittel", "Montagedojo", "Spaßdojo nur zum Spaß", "Dojo schweißen", "Dojo löten"]

  const handleItemSelect = (name) => {
    setSelectedDojo(name);
  }

  return (
    <div className='flex min-w-full justify-center'>
      <Menu as="div" className="inline-block mb-6 text-left ">

        {/* Menu closed */}
        <div className=''>
          <Menu.Button className="inline-flex w-72 justify-center items-center rounded-md border border-gray-300
                                bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm
                                hover:bg-gray-50 hover:cursor-pointer focus:outline-none transition ease-out
                                ">
            <p className=' w-64 truncate text-base font-light'>
              {selectedDojo === "" ? "select Dojo" :  selectedDojo}
            </p>
            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 sticky right-0" aria-hidden="true" />
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

          <Menu.Items className="absolute right-0 mt-2 w-64 origin-center rounded-md
                              bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none
                                ">
            <div className="py-1 max-h-64 overflow-y-auto">

              {dojoList.map((name, index) => (
                <div key={index}>
                  <Menu.Item>

                    {({ active }) => (
                      <p
                      onClick={ () => {(active && selectedDojo !== name)  && handleItemSelect(name)}}
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm hover:cursor-pointer truncate'
                        )}
                      >
                        {name}
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
  )
}

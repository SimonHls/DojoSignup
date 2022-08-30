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
  const dojoList = ["Dojo1", "Dojo2", "Dojo3"]

  const handleItemSelect = (name) => {
    setSelectedDojo(name);
  }

  return (
    <Menu as="div" className="relative inline-block mb-4 text-left ">

      {/* Menu closed */}
      <div className=''>
        <Menu.Button className="inline-flex w-64 justify-center rounded-md border border-gray-300
                              bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 hover:cursor-pointer
                                focus:outline-none ">
          {selectedDojo === "" ? "select Dojo" :  selectedDojo}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
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

        <Menu.Items className="absolute right-0 mt-2 w-64 origin-top-right rounded-md
                             bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none truncate">
          <div className="py-1">

            {dojoList.map((name, index) => (
              <div key={index}>
                <Menu.Item>

                  {({ active }) => (
                    <p
                    onClick={ () => {(active && selectedDojo !== name)  && handleItemSelect(name)}}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm hover:cursor-pointer'
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
  )
}

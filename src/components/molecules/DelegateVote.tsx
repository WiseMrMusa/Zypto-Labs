import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function DelegateVote() {
    return (
        <div className="">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80 ">
                        Delegate Vote
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute z-30 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="p-2">
                           
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-gray-100 ' : 'text-gray-900'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                       
                                        Delegate to Myself
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-gray-100' : 'text-gray-900'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        Delegate to Address
                                    </button>
                                )}
                            </Menu.Item>
                            </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}
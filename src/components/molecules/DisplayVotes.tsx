import { Tab } from "@headlessui/react";

export default function DisplayVotes() {
    return (
        <div className="flex flex-col bg-white ring-1 ring-slate-300 rounded-md">
            <div className="p-4 ">
                <h2 className="text-lg font-semibold">Votes</h2>
            </div>
            <div>
                <Tab.Group>
                    <Tab.List
                        className={`w-full flex`}
                    >
                        <Tab
                            className={`w-full p-2 outline-none`}
                        >
                            For
                        </Tab>
                        <Tab
                            className={`w-full p-2 outline-none`}
                        >
                            Against
                        </Tab>
                        <Tab
                            className={`w-full p-2 outline-none`}
                        >
                            Abstain
                        </Tab>
                    </Tab.List>
                    <Tab.Panels>
                        <Tab.Panel
                            className={`w-full outline-none border divide-y`}
                        >
                            <div className="flex justify-between px-6 py-2">
                                <p className="text-sm ">2 Addresses</p>
                                <p className="text-sm ">100B votes</p>
                            </div>

                            <div className="flex justify-between px-6 py-4">
                                <p className="text-sm ">0xEF66A446..Ad0</p>
                                <p className="text-sm font-semibold">100M votes</p>
                            </div>
                            <div className="flex justify-between px-6 py-4">
                                <p className="text-sm ">0xEF66A446..Ad0</p>
                                <p className="text-sm font-semibold">100M votes</p>
                            </div>


                        </Tab.Panel>
                        <Tab.Panel
                            className={`w-full outline-none border divide-y`}
                        ><div className="flex justify-between px-6 py-2">
                                <p className="text-sm ">4 Addresses</p>
                                <p className="text-sm ">100B votes</p>
                            </div>

                            <div className="flex justify-between px-6 py-4">
                                <p className="text-sm ">0xEF66A446..Ad0</p>
                                <p className="text-sm font-semibold">100M votes</p>
                            </div>
                            <div className="flex justify-between px-6 py-4">
                                <p className="text-sm ">0xEF66A446..Ad0</p>
                                <p className="text-sm font-semibold">100M votes</p>
                            </div>
                            <div className="flex justify-between px-6 py-4">
                                <p className="text-sm ">0xEF66A446..Ad0</p>
                                <p className="text-sm font-semibold">100M votes</p>
                            </div>
                            <div className="flex justify-between px-6 py-4">
                                <p className="text-sm ">0xEF66A446..Ad0</p>
                                <p className="text-sm font-semibold">100M votes</p>
                            </div>
                            </Tab.Panel>
                        <Tab.Panel
                            className={`w-full outline-none border divide-y`}
                        ><div className="flex justify-between px-6 py-2">
                                <p className="text-sm ">1 Addresses</p>
                                <p className="text-sm ">100B votes</p>
                            </div>

                            <div className="flex justify-between px-6 py-4">
                                <p className="text-sm ">0xEF66A446..Ad0</p>
                                <p className="text-sm font-semibold">100M votes</p>
                            </div>
                            </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </div>
    )
}
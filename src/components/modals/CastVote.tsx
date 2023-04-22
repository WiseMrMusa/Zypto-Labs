import { Dialog, Transition } from '@headlessui/react';
import { Fragment, type SVGProps, useState, useContext } from 'react';
import { RadioGroup } from '@headlessui/react';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { ContractContext } from '@/context/ContractContext';
import governanceABI from '@/utils/abis/governanceABI.json';

const plans = [
    {
        name: 'For',
        value: 1,
    },
    {
        name: 'Against',
        value: 0,
    },
    {
        name: 'Abstain',
        value: 3,
    },
];

export function OyaVote({ vote, setVote}: {proposalId: number, vote: number, setVote: (value: number) => void}) {
  


    return (
        <div className="w-full px-4 py-16 ">
            <div className="mx-auto w-full max-w-md ">
                <RadioGroup value={vote} onChange={setVote}>
                    <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
                    <div className="space-y-8">
                        {plans.map((plan) => (
                            <RadioGroup.Option
                                key={plan.name}
                                value={plan.value}
                                className={({ active, checked }) =>
                                    `${active
                                        ? 'ring-offset-2 ring-offset-slate-300'
                                        : ''
                                    }
                  ${checked ? 'bg-cyan-500 text-white' : 'bg-white'
                                    }
                    relative flex cursor-pointer rounded-lg px-5 py-5 shadow-lg focus:outline-none`
                                }
                            >
                                {({
                                    
                                    // active, 
                                    checked }) => (
                                    <>
                                        <div className="flex w-full items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="text-lg">
                                                    <RadioGroup.Label
                                                        as="p"
                                                        className={`font-medium  ${checked ? 'text-white' : 'text-gray-900'
                                                            }`}
                                                    >
                                                        {plan.name}
                                                    </RadioGroup.Label>
                                                    <RadioGroup.Description
                                                        as="span"
                                                        className={`inline ${checked ? 'text-sky-100' : 'text-gray-500'
                                                            }`}
                                                    >
                                                        
                                                    </RadioGroup.Description>
                                                </div>
                                            </div>
                                            {checked && (
                                                <div className="shrink-0 text-white">
                                                    <CheckIcon className="h-6 w-6" />
                                                </div>
                                            )}
                                        </div>
                                    </>
                                )}
                            </RadioGroup.Option>
                        ))}
                    </div>
                </RadioGroup>
            </div>
        </div>
    );
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
            <path
                d="M7 13l3 3 7-7"
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}


export default function CastVote({proposalId}: {proposalId: string}) {
    const [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    const [vote, setVote] = useState<number>(0);
    const governanceContract = useContext(ContractContext);


    const { config } = usePrepareContractWrite({
        address: governanceContract,
        abi: governanceABI,
        functionName: 'castVote',
        args: [proposalId, vote]
    });

    const { write: castVote } = useContractWrite(config)

    const handleVote = () => {
        if(castVote){
            castVote();
        }
        closeModal();
    }

    

    return (
        <>
            <div className="inset-0 flex items-center justify-center ">
                <button
                    type="button"
                    onClick={openModal}
                    className="inline-flex w-full justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80 "
                >
                    Vote
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 backdrop-blur bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-50 p-6 text-left align-middle shadow-xl transition-all ">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-2xl font-medium leading-6 text-gray-900"
                                    >
                                        Vote
                                    </Dialog.Title>
                                    <div className="mt-2">
                                            <OyaVote proposalId={proposalId} vote={vote} setVote={setVote}/>
                                    </div>

                                    <div className="mt-4 w-full">
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                                            onClick={handleVote}
                                        >
                                            Vote
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}

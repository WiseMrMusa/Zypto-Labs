"use client"
import { useState } from 'react'
import { RadioGroup, Transition } from '@headlessui/react'

export function ChoosePlan() {
    let [plan, setPlan] = useState('monthly')

    return (

        <RadioGroup
            value={plan}
            onChange={setPlan}
            className="grid grid-cols-2"
        >

            <RadioGroup.Option
                value="monthly"
                className="cursor-pointer border border-gray-300 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing.2)-1px)] text-sm text-gray-700 outline-2 outline-offset-2 transition-colors hover:border-gray-400 rounded-l-lg"
            >
                {({ checked }) => (
                    <span className={checked ? 'py-2 text-center text-sm font-semibold text-white [&amp;:not(:focus-visible)]:focus:outline-none' : ''}>Monthly
                        {checked && <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 z-10 grid grid-cols-2 overflow-hidden rounded-lg bg-cyan-500 transition-all duration-300  [clip-path:inset(0_50%_0_0)]"
                        >
                            <div className="py-2 text-center text-sm font-semibold text-white [&amp;:not(:focus-visible)]:focus:outline-none">Monthly</div>
                            <div className="py-2 text-center text-sm font-semibold text-white [&amp;:not(:focus-visible)]:focus:outline-none -ml-px">Annually</div>
                        </div>}
                    </span>

                )}
            </RadioGroup.Option>
            <RadioGroup.Option value="annually"
                className="cursor-pointer border border-gray-300 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing.2)-1px)] text-sm text-gray-700 outline-2 outline-offset-2 transition-colors hover:border-gray-400 -ml-px rounded-r-lg"

            >
                {({ checked }) => (
                    <span className={checked ? 'py-2 text-center text-sm font-semibold text-white [&amp;:not(:focus-visible)]:focus:outline-none -ml-px' : ''}>Annually
                        {checked && <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 z-10 grid grid-cols-2 overflow-hidden rounded-lg bg-cyan-500 transition-all duration-300 [clip-path:inset(0_0_0_calc(50%-1px))]"
                        >
                            <div className="py-2 text-center text-sm font-semibold text-white [&amp;:not(:focus-visible)]:focus:outline-none">Monthly</div>
                            <div className="py-2 text-center text-sm font-semibold text-white [&amp;:not(:focus-visible)]:focus:outline-none -ml-px">Annually</div>
                        </div>}</span>
                )}
            </RadioGroup.Option>


        </RadioGroup>
    )
}
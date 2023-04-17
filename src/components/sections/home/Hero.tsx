import React from 'react'
import ForbesLogo from '@/components/logos/ForbesLogo'
import TechCrunch from '@/components/logos/TechCrunch'
import BBCLogo from '@/components/logos/BBCLogo'
import Link from 'next/link'
import AppleButton from '@/components/buttons/AppleButton'
import CircularAnimation from '@/components/effects/CircularAnim'

export const HeroSection = () => {
    return (
        <div className='overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20'>
                    <div className='relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6'>
                        <h1 className='text-4xl font-medium tracking-tight text-gray-900'>Join the community of Angel Investors</h1>
                        <p className="mt-6 text-lg text-gray-600">By leveraging insights from our network of industry insiders, you’ll know exactly when to buy to maximize profit, and exactly when to sell to avoid painful losses.</p>

                        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
                            <Link
                                href="#"
                                className="rounded-lg transition-colors bg-gray-800 text-white hover:bg-gray-900"
                            >
                                <AppleButton />
                            </Link>
                            <Link
                                className="inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80"
                                href="/token"
                            >
                                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6 flex-none"><circle cx="12" cy="12" r="11.5" stroke="#D4D4D4"></circle><path d="M9.5 14.382V9.618a.5.5 0 0 1 .724-.447l4.764 2.382a.5.5 0 0 1 0 .894l-4.764 2.382a.5.5 0 0 1-.724-.447Z" fill="#A3A3A3" stroke="#A3A3A3"></path></svg>
                                <span className="ml-2.5">Join the DAO</span>
                            </Link>
                        </div>
                    </div>

                    <div className='relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6'>
                        <div className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0">
                            <CircularAnimation />
                            
                    </div>
                    
                        
                    </div>
                    <div className='relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6'>
                        <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
                            <p className="text-center text-sm font-semibold text-gray-900 lg:text-left">As featured in</p>
                            <ul role="list" className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-x-10 gap-y-8 lg:mx-0 lg:justify-start">
                                <li className="flex">
                                    <ForbesLogo />
                                </li>
                                <li className="flex">
                                    <TechCrunch />
                                </li>
                                <li className="flex">
                                    <BBCLogo />
                                </li>
                                <li className="flex">
                                    <ForbesLogo />
                                </li>
                                <li className="flex">
                                    <ForbesLogo />
                                </li>
                                <li className="flex">
                                    <ForbesLogo />
                                </li>
                                <li className="flex">
                                    <ForbesLogo />
                                </li>
                                <li className="flex">
                                    <ForbesLogo />
                                </li>
                                <li className="flex">
                                    <ForbesLogo />
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
'use client'
import DisplayVotes from "@/components/molecules/DisplayVote";
import { useParams } from "next/navigation"

export default function Page() {
    const { proposal } = useParams();
    return (
        <div className="flex flex-col">
            <div className="flex justify-between bg-white p-4 ring-1 ring-slate-300 w-full rounded-md mt-6 ">
                <h2 className="text-2xl font-semibold">Name of the Proposal</h2>
                <div className="flex gap-4 ">
                    <button className="inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80 lg:block">Settings</button>
                    <button className="inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80 lg:block">Create new Proposal</button>
                    <button className="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80 lg:block">Delegate Vote</button>
                </div>
            </div>

            <div className="flex gap-4 mt-6">
                <div className="flex flex-col grow gap-8 w-full">
                    <div className="flex bg-white p-4 ring-1 ring-slate-300  rounded-md">
                        <h2 className="text-lg font-semibold">Overview</h2>
                        <div className="h-96"></div>
                    </div>
                    <div className="flex bg-white p-4 ring-1 ring-slate-300 rounded-md">
                        <h2 className="text-lg font-semibold">Details</h2>
                    </div>
                </div>
                <div className="flex flex-col grow-0 w-2/5 gap-8">
                    <DisplayVotes />
                    <div className="flexbg-white p-4 ring-1 ring-slate-300 rounded-md">
                        <h2 className="text-lg font-semibold">Status</h2>
                    </div>
                </div>
            </div>


            <div className="flex justify-around bg-white p-4 ring-1 ring-slate-300 w-full rounded-md mt-6">
                {/* <ViewProposals proposals={proposals} /> */}
            </div>

        </div>
    )
}
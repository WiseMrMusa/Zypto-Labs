import NewProposalModal from "@/components/modals/NewProposalModal";
import DelegateVote from "@/components/molecules/DelegateVote";
import { ViewProposals } from "@/components/molecules/ViewProposals";
import useProposals from "@/hooks/useProposals";


export default function Page(){
    const okah = useProposals();
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col ">
            <div className="flex justify-between bg-white p-4 ring-1 ring-slate-300 w-full rounded-md mt-6 ">
                <h2 className="text-2xl font-semibold">Zypto Polygon</h2>
                <div className="flex gap-4 ">
                    <button className="inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80 lg:block">Settings</button>
                    <NewProposalModal />
                    <DelegateVote />
                </div>
            </div>

            <div className="flex justify-around bg-white p-4 ring-1 ring-slate-300 w-full rounded-md mt-6 ">
                <div className="flex flex-col items-center">
                    <p className="text-xl font-semibold">8</p>
                    <p className="text-xs uppercase font-semibold">Proposals</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-xl font-semibold">1</p>
                    <p className="text-xs uppercase font-semibold">Holders</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-xl font-semibold">1</p>
                    <p className="text-xs uppercase font-semibold">Voters</p>
                </div>
            </div>

            <div className="flex justify-around bg-white p-4 ring-1 ring-slate-300 w-full rounded-md mt-6">
                {okah 
                    && <ViewProposals proposals={okah} />
                }
            </div>

        </div>
        </div>
    )
}
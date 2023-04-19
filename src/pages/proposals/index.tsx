import { ViewProposals } from "@/components/molecules/ViewProposals";
import useProposals from "@/hooks/useProposals";

export default function Page() {
    const proposals  = useProposals();
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="flex justify-around bg-white p-4 ring-1 ring-slate-300 w-full rounded-md mt-6">
                {proposals &&
                    <ViewProposals proposals={proposals} />
                }
            </div>
        </div>
    )
}
import { ViewProposals } from "@/components/molecules/ViewProposals";
import { api } from "@/utils/api";



export default function Page() {
    const okah = api.proposal.proposal.useQuery();
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="flex justify-around bg-white p-4 ring-1 ring-slate-300 w-full rounded-md mt-6">
                {
                    okah.data &&
                    <ViewProposals proposals={okah.data.proposals} />
                }
            </div>
        </div>
    )
}
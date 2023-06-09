
import Link from "next/link";
import NewProposalModal from "../modals/NewProposalModal";
import { type ProposalType } from "@/utils/types/proposalTypes";

export const ViewProposals = ({ proposals }: { proposals: ProposalType[] }) => {
    return (
        <div className="relative rounded-xl overflow-auto">
            <div className="shadow-sm overflow-hidden">
                <div className="flex justify-between items-center px-6 py-4">
                    <h2 className=" text-xl font-semibold text-slate-600">Proposals</h2>
                    <div className="flex gap-4 items-center">
                        <div className=" font-medium text-sm text-slate-400">
                            7 <span className=" text-green-600">Passed</span>
                        </div>
                        <div className=" font-medium text-sm text-slate-400">
                            0 <span className=" text-red-600">Failed</span>
                        </div>

                        <NewProposalModal />
                    </div>
                </div>
                <table className="border-collapse table-fixed w-full text-sm">
                    <thead>
                        <tr>
                            <th className="border-b flex items-center font-medium p-4 pl-8 pb-3 text-slate-400  text-left">Proposals</th>
                            <th className="border-b  font-medium p-4 pl-8 pb-3 text-slate-400  text-left">Votes For</th>
                            <th className="border-b  font-medium p-4 pl-8 pb-3 text-slate-400  text-left">Votes Against</th>
                            <th className="border-b  font-medium p-4 pl-8 pb-3 text-slate-400  text-left">Abstain</th>
                            <th className="border-b  font-medium p-4 pl-8 pb-3 text-slate-400  text-left">Percentage</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white ">
                        {proposals.map((proposal, index) => {
                            const forPercent = proposal.voteStats[0]?.percent.toFixed();

                            return (
                                <tr key={`proposal-row-${index}`}>
                                    <td className='border-b border-slate-100  p-4 pl-8 text-slate-500 '>
                                    <Link href={`/proposals/${proposal.id}`}>
                                        {proposal.title}
                                    </Link>
                                        </td>
                                    <td className='border-b border-slate-100  p-4 pl-8 text-slate-500 '>{proposal.voteStats[0]?.votes}</td>
                                    <td className='border-b border-slate-100  p-4 pl-8 text-slate-500 '>{proposal.voteStats[1]?.votes}</td>
                                    <td className='border-b border-slate-100  p-4 pl-8 text-slate-500 '>{proposal.voteStats[2]?.votes}</td>
                                    <td className='border-b border-slate-100  p-4 pl-8 text-slate-500 '>{forPercent}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}


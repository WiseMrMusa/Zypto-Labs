import { ContractContext } from "@/context/ContractContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { type ProposalType } from "@/utils/types/proposalTypes";

export default function useProposals() {

    
    const governanceContract = useContext(ContractContext);
    const [proposal, setProposal] = useState<ProposalType[]>();
    useEffect(() => {
    const query =
    `query Proposals(
        $chainId: ChainID!,
        $governors: [Address!],
        $sort: ProposalSort,
        $pagination: Pagination
        ) {
            proposals(
                chainId: $chainId,
                governors: $governors,
                sort: $sort,
                pagination: $pagination
                ) {
                    id
                    title
                    eta
                    governor {
                        name
                    }
                    voteStats {
                        support
                        weight
                        votes
                        percent
                    }
                }
                
            }`;
            
            const variable = {
                "chainId": "eip155:80001",
                "governors": [
                    governanceContract
                ],
                "sort": { "field": "START_BLOCK", "order": "DESC" },
                "pagination": { "limit": 4, "offset": 0 }
            };
            
            const options = {
                method: 'POST',
                url: process.env.NEXT_PUBLIC_API_URL,
                headers: {
                    'Content-Type': 'application/json',
            'Api-key': process.env.NEXT_PUBLIC_API_KEY
        },
        data: { "query": query, "variables": variable }
    };

        axios.request(options).then(function (response: { data: { data: {proposals : ProposalType[];} }}) {
        setProposal(response.data.data.proposals)

    }).catch(function (error) {
        console.error(error);
    });

    });

    return proposal;
}
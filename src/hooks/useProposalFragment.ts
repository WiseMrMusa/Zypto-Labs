import { ContractContext } from "@/context/ContractContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { type ProposalDetails } from "@/utils/types/proposalTypes";

export default function useProposalFragment({ id }: { id: string; }) {


  const governanceContract = useContext(ContractContext);
  const [proposal, setProposal] = useState<ProposalDetails>();
  useEffect(() => {
    const query =
      `
query Proposals($chainId: ChainID!, $governors: [Address!], $sort: ProposalSort, $pagination: Pagination, $proposalIds: [ID!]) {
  proposals(
    chainId: $chainId
    proposalIds: $proposalIds
    governors: $governors
    sort: $sort
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
    start {
      id
      number
      timestamp
    }
    end {
      id
      number
      timestamp
    }
    executable {
      callDatas
      signatures
      targets
      values
    }
    votes {
      id
      voter {
        id
        address
        ens
        twitter
        name
        bio
        picture
      }
    }
  }}
            `;

    const variable = {
      "chainId": "eip155:80001",
      "proposalIds": id,
      "governors": [
        governanceContract
      ],
      "sort": { "field": "START_BLOCK", "order": "DESC" },
      "pagination": { "limit": 1, "offset": 0 }
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

    axios.request(options).then(function (response: { data: { data: { proposals: ProposalDetails[]; }; }; }) {
      setProposal(response.data.data.proposals[0]);

    }).catch(function (error) {
      console.error(error);
    });

  }, [governanceContract, id]);

  return proposal;
}
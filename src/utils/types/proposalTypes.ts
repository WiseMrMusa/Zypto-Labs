import { type Address } from "wagmi";

export type voteStats = {
    support: number;
    weight: number;
    votes: number;
    percent: number;
};

export type ProposalType = {
    id: string,
    title: string,
    eta: string,
    governor: {
        name: string;
    };
    voteStats: voteStats[];
};

export type ProposalDetails = {
    id: string,
    title: string,
    eta: string,
    governor: {
        name: string;
    };
    voteStats: {
        support: number;
        weight: number;
        votes: number;
        percent: number;
    }[];
    start: {
        id: string,
        number: number,
        timestamp: number;
    };
    end: {
        id: number;
        number: number,
        timestamp: number;
    };
    executable: {
        callDatas: string;
        signatures: string;
        targets: Address[];
        values: number[];
    };
    votes: {
        id: string;
        voter: voter;
    };
};

export type voter = {
    id: string;
    address: Address;
    ens: string;
    twitter: string;
    name: string;
    bio: string;
    picture: string;
    ownedSafes: string;
};

// export type proposer = {
//       activity : {
//     id: string;
//     voter: Address;
//     hash: string;
//     support: string;
//     weight: number;
//     reason: string;
// }
    // }
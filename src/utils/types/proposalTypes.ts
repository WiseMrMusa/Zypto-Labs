export type ProposalType = {
    id : string,
    title : string,
    eta : string,
    governor : {
        name: string
    }
    voteStats : {
        support : number;
        weight : number;
        votes : number;
        percent : number;
    }[]
}
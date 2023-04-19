import {
    createTRPCRouter,
    publicProcedure,
    protectedProcedure,
} from "@/server/api/trpc";


export const proposalRouter = createTRPCRouter({
    proposal: publicProcedure
        .query(() => {
            return "Pressure ti wa"
        }),

    getSecretMessage: protectedProcedure.query(() => {
        return "you can now see this secret message!";
    }),
});

export type ProposalRouter = typeof proposalRouter
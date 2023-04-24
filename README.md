# Zypto DAO

### Documentation and Architecture

## Table of Contents

1. Project Overview
2. System Architecture
3. Backend Contracts

## Project Overview

Zypto is a Decentralized Autonomous Organization that allows members of the community to propose business ideas and raise equity for them. The DAO project is meant to be completed in four days and includes system architecture, user interface and experience design, frontend and backend implementation, and backend contract design.

## System Architecture

The system is made up of four components: the DAO, governance, LaunchPad, and the stake system.

### The DAO

To become a member of the DAO community, there are 3 categories of members, the starter,  Investors, and VIPs. you need to pay $2500 or the equivalent in supported cryptocurrency to a specific vault address to be able to join the Investors and VIPs categories. This payment entitles you to receive an exclusive limited amount of governance tokens intended for voting.

The DAO token can be exchanged for the governance token, which is used to vote for proposals. Voters, whether for or against a proposal, will be whitelisted to claim an airdrop of the share of the business proposal after Launchpad.

### Governance

Members of the platform with the governance token can vote for a business proposal to be accepted into the community.

### LaunchPad ICO

When a proposal is accepted, members of the community can then raise the money needed for the company, to have a share of the company.

### Stake System

This is where the shares of each company are managed.

## Backend Contracts

The Zypto DAO consists of the following contracts all deployed on Bunzz and verified:

1. [ERC20DaoToken + ERC20Voting](https://app.bunzz.dev/dapps/5ebc5119-6635-4f66-9ca3-3c60be4bc87b/dashboard) : 0x0555c61C42e52B14eBa7F390B61292c3a230C466
2. [Governance](https://app.bunzz.dev/dapps/20798e24-7767-4156-ba92-6edef141b465/dashboard): 0xc7b7D49aE778086ABE12A4f9b3549bC09A4499de
3. [ICO LaunchPad Factory](https://app.bunzz.dev/dapps/0edd84dc-2af8-4602-8aa1-6db79eb92b3f/dashboard) : 0x75cC31EE1c3377125Ff7215b4520BB74543f11D7

These contracts enable the functioning of the DAO and the execution of the LaunchPad ICO.

## ****How it works****

**Joining the DAO**

When joining the DAO, you'll need to get the governanceToken using MATIC. There are three categories of members in the DAO system depending on the subscription plan.

**Starter :** This plan is for the regular community participants (early testers, social media followers) who are interested in joining the decision making the community. They earn portion of the DAOtoken for performing specific tasks in the community

**Investor:** These are the participants that contribute to the DAO vaults, which is use for purpose of the DAO and community development. With the minimum of $100 to get a certain amount of voting units, they have the benefit of taking part not only in the DAO and community development but also in the Investment proposal decisions.

**VIP:** Participants have benefits just like the Investors, but with higher amount of voting unit

The Token page is built for this purpose [here](https://zypto-dun.vercel.app/token).

**Creating a proposal.**

When creating a proposal you'll need to navigate to the [governor](https://zypto-dun.vercel.app/governor) page . On the top-right side, you’ll locate the create new proposal button .

When you finalize your proposal parameters and call submit, you'll need to ensure your balance of governance token is greater than or equal to minProposalAmount (10 tokens by default). When the proposal is being created, the voting starts.

**Voting on a proposal**

When voting on a proposal you'll need to choose the amount of tokens you wish to stake on the proposal as votes. Before then you need to delegate your voting units to your self or any other trusted account to vote on your behalf. Delegating voting units is necessary (even to yourself) before it can be counted as an actual vote.

**Passing a proposal**

In order to "pass" a proposal and therefore executing a proposal, the proposal must contain enough votes to pass quorum. Quorum is the percentage of tokens over circulating supply that are needed to deem a poll executable. If a proposal does not have enough votes to pass quorum, it will be revoked(defeated) upon it's expiration date.

In any case, the advocates (voters) of the proposal will all be refunded their tokens.

**Executing a proposal**

If you are an author of a proposal, you have the ability to execute proposal which will automatically create an ICO launchpad to start the fundraising(Investment) for the project proposed by selling the custom tokens 

**Staking system**

Coming soon…


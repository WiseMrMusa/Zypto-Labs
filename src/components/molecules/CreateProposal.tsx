import { useState, useContext, useEffect } from 'react';
import { type Address, useContractWrite, usePrepareContractWrite, useToken } from 'wagmi';
import governorABI from '@/utils/abis/governanceABI.json'
import { ethers } from "ethers";
import { ContractContext } from '@/context/ContractContext';

const CreateProposal = () => {
    const [_proposalName, _setProposalName] = useState<string>();
    const [_description, _setDescription] = useState<string>();
    const [_tokenAddress, _setTokenAddress] = useState<Address>();
    const [_price, _setPrice] = useState<number>();
    const [_period, _setPeriod] = useState<number>();
    const [_calldata, _setCalldata] = useState<string>();

    const { data: tokenData, isError: tokenDataError, error: tokenError } = useToken({
        address: _tokenAddress,
    })

    const GovernorContract = useContext(ContractContext);
    
    useEffect(
        () => {
            const abiCoder = new ethers.utils.AbiCoder();
        if (_tokenAddress) {
            try {
                const well = abiCoder.encode(["address", "uint256", "uint256"], [_tokenAddress, _price, _period]);
                _setCalldata(`0x788068b7${well.slice(2)}`);
            } catch (error) {
                console.log(error);
            }
        }
    }, [_tokenAddress, _price, _period])

    const { config, error, isError } = usePrepareContractWrite({
        address: GovernorContract,
        abi: governorABI,
        functionName: 'propose',
        args: [
            [GovernorContract],
            [0],
            [_calldata],
            _proposalName],
    })
    // const { data, isLoading, isSuccess, write: propose } = useContractWrite(config)
    const { write: propose } = useContractWrite(config)

    const handlePropose = () => {
        propose?.();
    }

    return (
        <main>
            <div
                className=" flex flex-col rounded-2xl p-8 w-4/5 mx-auto gap-8 transition-colors "
            >
                <div
                    className="flex flex-col gap-4 text-gray-600"
                >
                    <h2 className="mb-6 text-2xl font-semibold">Create Bussiness Proposal</h2>

                    <label className="">Name your Proposal</label>
                    <input
                        type="text"
                        placeholder="Zypto Labs"
                        onChange={(e) => _setProposalName(e.target.value as Address)}
                        className="flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm"
                    />
                    <label className="">Description</label>
                    <input
                        type="textarea"
                        placeholder="A demo description of your project"
                        onChange={(e) => _setDescription(e.target.value as Address)}
                        className="flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm"
                    />
                    <label className="">Token Address</label>
                    <div className=" flex gap-4">
                        <input
                            type="textarea"
                            placeholder="0x..."
                            onChange={(e) => _setTokenAddress(e.target.value as Address)}
                            className="flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm"
                        />

                        {tokenData &&
                            <div className="flex p-2 px-4 align-middle items-center  ring-1 ring-zinc-200 rounded-md outline-none bg-zinc-50 z-50">
                                <p className="text-sm font-semibold text-zinc-800">{tokenData.symbol}</p>
                            </div>
                        }
                    </div>
                    <div className="flex col-2 gap-8 w-100">
                        <div className="flex flex-col gap-4 grow">
                            <label className="">Price</label>
                            <input
                                type="number"
                                onChange={(e) => _setPrice(e.target.value as unknown as number)}
                                className="flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm"
                            />
                        </div>
                        <div className="flex flex-col gap-4 grow">
                            <label className="">Period</label>
                            <input
                                type="number"
                                onChange={(e) => _setPeriod(e.target.value as unknown as number)}
                                className="flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm"
                            />
                        </div>
                    </div>
                </div>
                <button disabled={isError || tokenDataError || !propose} onClick={handlePropose} className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70  flex-none disabled:bg-zinc-500 disabled:cursor-not-allowed "
                >Submit</button>
                {(isError || tokenDataError) && (
                    <div
                        className="font-mono text-[0.625rem] font-semibold leading-6 rounded-lg px-1.5 ring-1 ring-inset ring-rose-200 bg-rose-50 text-red-500 "
                    >
                        {error?.message || tokenError?.message || _description }
                    </div>)}
            </div>
        </main>
    );
};

export default CreateProposal;
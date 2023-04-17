import { createContext } from "react";
import type { Address } from "wagmi";

export const ContractContext = createContext<Address>("0x");

export function ContractProvider({ children }: { children : React.ReactNode}) {
    return (
        <ContractContext.Provider value="0x7bde2a2Fa2C77513cB97F9e10d67586250239f8E"
        >
            {children}
        </ContractContext.Provider>
    )
}
import { createContext } from "react";

export const ContractContext = createContext("");

export function ContractProvider({ children }: any) {
    return (
        <ContractContext.Provider value="0x7bde2a2Fa2C77513cB97F9e10d67586250239f8E"
        >
            {children}
        </ContractContext.Provider>
    )
}
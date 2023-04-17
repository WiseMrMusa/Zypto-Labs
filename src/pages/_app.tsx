import { type AppType } from "next/app";
import { type Session } from "next-auth";

import { api } from "@/utils/api";

import "@/styles/globals.css";
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import { WagmiConfig, createClient, goerli, sepolia } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { ContractProvider } from "@/context/ContractContext";
import Layout from "@/components/layout";
import { siweClient } from "@/utils/siweClient";

const alchemyId = process.env.ALCHEMY_ID;
const chains = [polygonMumbai, sepolia, goerli];



const client = createClient(
  getDefaultClient({
    appName: "Zypto Finance",
    alchemyId,
    chains
  }),
);

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { ...pageProps },
}) => {
  return (
    <WagmiConfig client={client}>
      <siweClient.Provider>
        <ConnectKitProvider>
          <ContractProvider>
            <Layout>
              <Component { ...pageProps} />
            </Layout>
          </ContractProvider>
        </ConnectKitProvider>
      </siweClient.Provider>
    </WagmiConfig>
  );
};

export default api.withTRPC(MyApp);

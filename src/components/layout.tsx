"use client"
import Header from '@/components/header'
import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, SIWESession, getDefaultClient } from "connectkit";
import { polygonMumbai, sepolia, goerli } from "wagmi/chains";
import { ContractProvider } from '@/context/ContractContext';
import { siweClient } from "@/utils/siweClient";
import { getDefaultProvider } from 'ethers'

const alchemyId = process.env.ALCHEMY_ID;
const chains = [polygonMumbai, sepolia, goerli];



const client = createClient(
  getDefaultClient({
    appName: "Zypto Finance",
    alchemyId,
    chains
  }),
);

// const client = createClient({
//   autoConnect: true,
//   provider: getDefaultProvider(),
// })


export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <html lang="en">
    // <body className='flex h-full flex-col bg-gray-50'>
    <>
      <Header />
      <main >
        <div>
        {children}
        </div>
      </main>
    </>
    // </body>
    // </html>
  )
}
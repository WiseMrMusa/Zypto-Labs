"use client"
import type { GetServerSideProps, NextPage } from "next";
import { siweServer } from "@/utils/siweServer";

const walletHasToken = async (address: string): Promise<boolean> => {
    return true
}

const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
    const { address } = await siweServer.getSession(req, res);

    if (!address || !(await walletHasToken(address))) {
        return {
            redirect: {
                permanent: false,
                destination: '/login', // Redirect if wallet does not have the required token
            },
        };
    }

    return {
        props: 
        {session,},
    };
};


export default function Page({data} : { data : string}){
    return <div>Welcome, collector. {data} </div>;
}
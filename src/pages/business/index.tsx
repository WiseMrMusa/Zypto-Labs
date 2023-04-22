// import Image from "next/image";
import type { GetServerSideProps } from "next";
import { siweServer } from "@/utils/siweServer";
import { type Address, useContractRead } from "wagmi";
import { ContractContext } from "@/context/ContractContext";
import governanceABI from '@/utils/abis/governanceABI.json';
import { useContext, useState } from "react";
import Link from "next/link";

// const walletHasToken = async (address: string): Promise<boolean> => {
//     // await address;
//     await api.example.hello;
//     return true// Your implementation of token-gated logic goes here
// }
const walletHasToken = (): boolean => {
    // await address;
    return true;// Your implementation of token-gated logic goes here
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
    const { address } = await siweServer.getSession(req, res);

    if (!address || !(walletHasToken())) {
        return {
            redirect: {
                permanent: false,
                destination: '/', // Redirect if wallet does not have the required token
            },
        };
    }

    return {
        props: {},
    };
};




export default function Page() {

    const [bussinesses, setBussinesses] = useState<Address[]>();
    const governanceContract = useContext(ContractContext);

    useContractRead({
        address: governanceContract,
        abi: governanceABI,
        functionName: 'getBussiness',
        onSuccess(data) {
            setBussinesses(data as Address[]);
        },
    }
    );

    return (
        <div className="h-full">
            <div className="relativeflex-none overflow-hidden px-6 lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex lg:px-0">
                <div className="absolute inset-0 -z-10 overflow-hidden bg-gray-950 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem]">
                    <svg className="absolute -bottom-48 left-[-40%] h-[80rem] w-[180%] lg:-right-40 lg:bottom-auto lg:left-auto lg:top-[-40%] lg:h-[180%] lg:w-[80rem]" aria-hidden="true"><defs><radialGradient id=":R1d6:-desktop" cx="100%"><stop offset="0%" stop-color="rgba(56, 189, 248, 0.3)"></stop><stop offset="53.95%" stop-color="rgba(0, 71, 255, 0.09)"></stop><stop offset="100%" stop-color="rgba(10, 14, 23, 0)"></stop></radialGradient><radialGradient id=":R1d6:-mobile" cy="100%"><stop offset="0%" stop-color="rgba(56, 189, 248, 0.3)"></stop><stop offset="53.95%" stop-color="rgba(0, 71, 255, 0.09)"></stop><stop offset="100%" stop-color="rgba(10, 14, 23, 0)"></stop></radialGradient></defs><rect width="100%" height="100%" fill="url(#:R1d6:-desktop)" className="hidden lg:block"></rect><rect width="100%" height="100%" fill="url(#:R1d6:-mobile)" className="lg:hidden"></rect></svg>
                    <div className="absolute inset-x-0 bottom-0 right-0 h-px bg-white mix-blend-overlay lg:left-auto lg:top-0 lg:h-auto lg:w-px"></div>
                </div>
                <div className="relative flex w-full lg:pointer-events-auto lg:mr-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:overflow-y-auto lg:pl-[max(4rem,calc(50%-38rem))]">
                    <div className="mx-auto max-w-lg lg:mx-0 lg:flex lg:w-96 lg:max-w-none lg:flex-col lg:before:flex-1 lg:before:pt-6">
                        ::before
                        <div className="">
                            <div className="relative">
                                <svg width="881" height="211" viewBox="0 0 881 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_112_2)">
                                        <path d="M247 103L261 86L307 104L357 36" stroke="white" stroke-opacity="0.2" stroke-dasharray="1 1" />
                                        <path d="M247 104C247.552 104 248 103.552 248 103C248 102.448 247.552 102 247 102C246.448 102 246 102.448 246 103C246 103.552 246.448 104 247 104Z" fill="white" />
                                        <path d="M261 87C261.552 87 262 86.5523 262 86C262 85.4477 261.552 85 261 85C260.448 85 260 85.4477 260 86C260 86.5523 260.448 87 261 87Z" fill="white" />
                                        <path d="M307 105C307.552 105 308 104.552 308 104C308 103.448 307.552 103 307 103C306.448 103 306 103.448 306 104C306 104.552 306.448 105 307 105Z" fill="white" />
                                        <path d="M357 37C357.552 37 358 36.5523 358 36C358 35.4477 357.552 35 357 35C356.448 35 356 35.4477 356 36C356 36.5523 356.448 37 357 37Z" fill="white" />
                                        <path d="M586 120L516 100L491 62L440 107L477 180L516 100" fill="white" fill-opacity="0.02" />
                                        <path d="M586 120L516 100M516 100L491 62L440 107L477 180L516 100Z" stroke="white" stroke-opacity="0.2" stroke-dasharray="1 1" />
                                        <path d="M586 121C586.552 121 587 120.552 587 120C587 119.448 586.552 119 586 119C585.448 119 585 119.448 585 120C585 120.552 585.448 121 586 121Z" fill="white" />
                                        <path d="M516 101C516.552 101 517 100.552 517 100C517 99.4477 516.552 99 516 99C515.448 99 515 99.4477 515 100C515 100.552 515.448 101 516 101Z" fill="white" />
                                        <path d="M491 63C491.552 63 492 62.5523 492 62C492 61.4477 491.552 61 491 61C490.448 61 490 61.4477 490 62C490 62.5523 490.448 63 491 63Z" fill="white" />
                                        <path d="M440 108C440.552 108 441 107.552 441 107C441 106.448 440.552 106 440 106C439.448 106 439 106.448 439 107C439 107.552 439.448 108 440 108Z" fill="white" />
                                        <path d="M477 181C477.552 181 478 180.552 478 180C478 179.448 477.552 179 477 179C476.448 179 476 179.448 476 180C476 180.552 476.448 181 477 181Z" fill="white" />
                                        <path d="M733 100L803 120L879 113L823 164L803 120" fill="white" fill-opacity="0.02" />
                                        <path d="M733 100L803 120M803 120L879 113L823 164L803 120Z" stroke="white" stroke-opacity="0.2" stroke-dasharray="1 1" />
                                        <path d="M733 101C733.552 101 734 100.552 734 100C734 99.4477 733.552 99 733 99C732.448 99 732 99.4477 732 100C732 100.552 732.448 101 733 101Z" fill="white" />
                                        <path d="M803 121C803.552 121 804 120.552 804 120C804 119.448 803.552 119 803 119C802.448 119 802 119.448 802 120C802 120.552 802.448 121 803 121Z" fill="white" />
                                        <path d="M879 114C879.552 114 880 113.552 880 113C880 112.448 879.552 112 879 112C878.448 112 878 112.448 878 113C878 113.552 878.448 114 879 114Z" fill="white" />
                                        <path d="M823 165C823.552 165 824 164.552 824 164C824 163.448 823.552 163 823 163C822.448 163 822 163.448 822 164C822 164.552 822.448 165 823 165Z" fill="white" />
                                        <g opacity="0.2" filter="url(#filter0_f_112_2)">
                                            <path d="M4 5C4.55228 5 5 4.55228 5 4C5 3.44772 4.55228 3 4 3C3.44772 3 3 3.44772 3 4C3 4.55228 3.44772 5 4 5Z" fill="white" />
                                        </g>
                                        <path opacity="0.2" d="M4 45C4.55228 45 5 44.5523 5 44C5 43.4477 4.55228 43 4 43C3.44772 43 3 43.4477 3 44C3 44.5523 3.44772 45 4 45Z" fill="white" />
                                        <path d="M36 23C36.5523 23 37 22.5523 37 22C37 21.4477 36.5523 21 36 21C35.4477 21 35 21.4477 35 22C35 22.5523 35.4477 23 36 23Z" fill="white" />
                                        <g opacity="0.2" filter="url(#filter1_f_112_2)">
                                            <path d="M50 147C50.5523 147 51 146.552 51 146C51 145.448 50.5523 145 50 145C49.4477 145 49 145.448 49 146C49 146.552 49.4477 147 50 147Z" fill="white" />
                                        </g>
                                        <g opacity="0.2" filter="url(#filter2_f_112_2)">
                                            <path d="M64 44C64.5523 44 65 43.5523 65 43C65 42.4477 64.5523 42 64 42C63.4477 42 63 42.4477 63 43C63 43.5523 63.4477 44 64 44Z" fill="white" />
                                        </g>
                                        <path opacity="0.2" d="M76 31C76.5523 31 77 30.5523 77 30C77 29.4477 76.5523 29 76 29C75.4477 29 75 29.4477 75 30C75 30.5523 75.4477 31 76 31Z" fill="white" />
                                        <path d="M101 117C101.552 117 102 116.552 102 116C102 115.448 101.552 115 101 115C100.448 115 100 115.448 100 116C100 116.552 100.448 117 101 117Z" fill="white" />
                                        <path opacity="0.2" d="M140 37C140.552 37 141 36.5523 141 36C141 35.4477 140.552 35 140 35C139.448 35 139 35.4477 139 36C139 36.5523 139.448 37 140 37Z" fill="white" />
                                        <path d="M149 135C149.552 135 150 134.552 150 134C150 133.448 149.552 133 149 133C148.448 133 148 133.448 148 134C148 134.552 148.448 135 149 135Z" fill="white" />
                                        <path opacity="0.2" d="M162 75C162.552 75 163 74.5523 163 74C163 73.4477 162.552 73 162 73C161.448 73 161 73.4477 161 74C161 74.5523 161.448 75 162 75Z" fill="white" />
                                        <g opacity="0.2" filter="url(#filter3_f_112_2)">
                                            <path d="M171 97C171.552 97 172 96.5523 172 96C172 95.4477 171.552 95 171 95C170.448 95 170 95.4477 170 96C170 96.5523 170.448 97 171 97Z" fill="white" />
                                        </g>
                                        <g opacity="0.2" filter="url(#filter4_f_112_2)">
                                            <path d="M210 57C210.552 57 211 56.5523 211 56C211 55.4477 210.552 55 210 55C209.448 55 209 55.4477 209 56C209 56.5523 209.448 57 210 57Z" fill="white" />
                                        </g>
                                        <path d="M235 91C235.552 91 236 90.5523 236 90C236 89.4477 235.552 89 235 89C234.448 89 234 89.4477 234 90C234 90.5523 234.448 91 235 91Z" fill="white" />
                                        <g opacity="0.2" filter="url(#filter5_f_112_2)">
                                            <path d="M275 83C275.552 83 276 82.5523 276 82C276 81.4477 275.552 81 275 81C274.448 81 274 81.4477 274 82C274 82.5523 274.448 83 275 83Z" fill="white" />
                                        </g>
                                        <path d="M306 7C306.552 7 307 6.55228 307 6C307 5.44772 306.552 5 306 5C305.448 5 305 5.44772 305 6C305 6.55228 305.448 7 306 7Z" fill="white" />
                                        <g opacity="0.2" filter="url(#filter6_f_112_2)">
                                            <path d="M307 65C307.552 65 308 64.5523 308 64C308 63.4477 307.552 63 307 63C306.448 63 306 63.4477 306 64C306 64.5523 306.448 65 307 65Z" fill="white" />
                                        </g>
                                        <path opacity="0.2" d="M380 69C380.552 69 381 68.5523 381 68C381 67.4477 380.552 67 380 67C379.448 67 379 67.4477 379 68C379 68.5523 379.448 69 380 69Z" fill="white" />
                                        <g opacity="0.2" filter="url(#filter7_f_112_2)">
                                            <path d="M380 109C380.552 109 381 108.552 381 108C381 107.448 380.552 107 380 107C379.448 107 379 107.448 379 108C379 108.552 379.448 109 380 109Z" fill="white" />
                                        </g>
                                        <g opacity="0.2" filter="url(#filter8_f_112_2)">
                                            <path d="M391 149C391.552 149 392 148.552 392 148C392 147.448 391.552 147 391 147C390.448 147 390 147.448 390 148C390 148.552 390.448 149 391 149Z" fill="white" />
                                        </g>
                                        <path opacity="0.2" d="M405 19C405.552 19 406 18.5523 406 18C406 17.4477 405.552 17 405 17C404.448 17 404 17.4477 404 18C404 18.5523 404.448 19 405 19Z" fill="white" />
                                        <g opacity="0.2" filter="url(#filter9_f_112_2)">
                                            <path d="M412 87C412.552 87 413 86.5523 413 86C413 85.4477 412.552 85 412 85C411.448 85 411 85.4477 411 86C411 86.5523 411.448 87 412 87Z" fill="white" />
                                        </g>
                                        <g opacity="0.2" filter="url(#filter10_f_112_2)">
                                            <path d="M426 211C426.552 211 427 210.552 427 210C427 209.448 426.552 209 426 209C425.448 209 425 209.448 425 210C425 210.552 425.448 211 426 211Z" fill="white" />
                                        </g>
                                        <g opacity="0.2" filter="url(#filter11_f_112_2)">
                                            <path d="M427 57C427.552 57 428 56.5523 428 56C428 55.4477 427.552 55 427 55C426.448 55 426 55.4477 426 56C426 56.5523 426.448 57 427 57Z" fill="white" />
                                        </g>
                                        <path d="M538 139C538.552 139 539 138.552 539 138C539 137.448 538.552 137 538 137C537.448 137 537 137.448 537 138C537 138.552 537.448 139 538 139Z" fill="white" />
                                        <g opacity="0.2" filter="url(#filter12_f_112_2)">
                                            <path d="M563 89C563.552 89 564 88.5523 564 88C564 87.4477 563.552 87 563 87C562.448 87 562 87.4477 562 88C562 88.5523 562.448 89 563 89Z" fill="white" />
                                        </g>
                                        <g opacity="0.2" filter="url(#filter13_f_112_2)">
                                            <path d="M611 155C611.552 155 612 154.552 612 154C612 153.448 611.552 153 611 153C610.448 153 610 153.448 610 154C610 154.552 610.448 155 611 155Z" fill="white" />
                                        </g>
                                        <path d="M637 151C637.552 151 638 150.552 638 150C638 149.448 637.552 149 637 149C636.448 149 636 149.448 636 150C636 150.552 636.448 151 637 151Z" fill="white" />
                                        <path opacity="0.2" d="M651 147C651.552 147 652 146.552 652 146C652 145.448 651.552 145 651 145C650.448 145 650 145.448 650 146C650 146.552 650.448 147 651 147Z" fill="white" />
                                        <g opacity="0.2" filter="url(#filter14_f_112_2)">
                                            <path d="M682 71C682.552 71 683 70.5523 683 70C683 69.4477 682.552 69 682 69C681.448 69 681 69.4477 681 70C681 70.5523 681.448 71 682 71Z" fill="white" />
                                        </g>
                                        <path d="M683 129C683.552 129 684 128.552 684 128C684 127.448 683.552 127 683 127C682.448 127 682 127.448 682 128C682 128.552 682.448 129 683 129Z" fill="white" />
                                        <g opacity="0.2" filter="url(#filter15_f_112_2)">
                                            <path d="M781 83C781.552 83 782 82.5523 782 82C782 81.4477 781.552 81 781 81C780.448 81 780 81.4477 780 82C780 82.5523 780.448 83 781 83Z" fill="white" />
                                        </g>
                                        <path opacity="0.2" d="M785 159C785.552 159 786 158.552 786 158C786 157.448 785.552 157 785 157C784.448 157 784 157.448 784 158C784 158.552 784.448 159 785 159Z" fill="white" />
                                        <g opacity="0.2" filter="url(#filter16_f_112_2)">
                                            <path d="M832 147C832.552 147 833 146.552 833 146C833 145.448 832.552 145 832 145C831.448 145 831 145.448 831 146C831 146.552 831.448 147 832 147Z" fill="white" />
                                        </g>
                                        <path d="M852 90C852.552 90 853 89.5523 853 89C853 88.4477 852.552 88 852 88C851.448 88 851 88.4477 851 89C851 89.5523 851.448 90 852 90Z" fill="white" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_f_112_2" x="2" y="2" width="4" height="4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                            <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_112_2" />
                                        </filter>
                                        <filter id="filter1_f_112_2" x="48" y="144" width="4" height="4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                            <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_112_2" />
                                        </filter>
                                        <filter id="filter2_f_112_2" x="62" y="41" width="4" height="4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                            <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_112_2" />
                                        </filter>
                                        <filter id="filter3_f_112_2" x="169" y="94" width="4" height="4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                            <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_112_2" />
                                        </filter>
                                        <filter id="filter4_f_112_2" x="208" y="54" width="4" height="4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                            <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_112_2" />
                                        </filter>
                                        <filter id="filter5_f_112_2" x="273" y="80" width="4" height="4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                            <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_112_2" />
                                        </filter>
                                        <filter id="filter6_f_112_2" x="305" y="62" width="4" height="4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                            <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_112_2" />
                                        </filter>
                                        <filter id="filter7_f_112_2" x="378" y="106" width="4" height="4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                            <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_112_2" />
                                        </filter>
                                        <filter id="filter8_f_112_2" x="389" y="146" width="4" height="4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                            <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_112_2" />
                                        </filter>
                                        <filter id="filter9_f_112_2" x="410" y="84" width="4" height="4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                            <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_112_2" />
                                        </filter>
                                        <filter id="filter10_f_112_2" x="424" y="208" width="4" height="4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                            <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_112_2" />
                                        </filter>
                                        <filter id="filter11_f_112_2" x="425" y="54" width="4" height="4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                            <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_112_2" />
                                        </filter>
                                        <filter id="filter12_f_112_2" x="561" y="86" width="4" height="4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                            <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_112_2" />
                                        </filter>
                                        <filter id="filter13_f_112_2" x="609" y="152" width="4" height="4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                            <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_112_2" />
                                        </filter>
                                        <filter id="filter14_f_112_2" x="680" y="68" width="4" height="4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                            <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_112_2" />
                                        </filter>
                                        <filter id="filter15_f_112_2" x="779" y="80" width="4" height="4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                            <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_112_2" />
                                        </filter>
                                        <filter id="filter16_f_112_2" x="830" y="144" width="4" height="4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                            <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_112_2" />
                                        </filter>
                                        <clipPath id="clip0_112_2">
                                            <rect width="881" height="211" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div>
                                    <Link href="/"><svg viewBox="0 0 140 32" fill="none" aria-hidden="true" className="inline-block h-8 w-auto"><title>Commit</title><mask id=":R36d6:-m" fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M31.75 18h-8.13a8 8 0 01-15.5 0H0a16 16 0 0031.75 0zm0-4h-8.13a8 8 0 00-15.5 0H0a16 16 0 0131.75 0z"></path></mask><path fill-rule="evenodd" clip-rule="evenodd" d="M31.75 18h-8.13a8 8 0 01-15.5 0H0a16 16 0 0031.75 0zm0-4h-8.13a8 8 0 00-15.5 0H0a16 16 0 0131.75 0z" fill="url(#:R36d6:-g)"></path><path d="M31.75 18l1 .12.13-1.12h-1.13v1zm-8.13 0v-1h-.77l-.2.75.97.25zm-15.5 0l.98-.25-.2-.75h-.77v1zM0 18v-1h-1.13l.14 1.12L0 18zm23.62-4l-.96.25.19.75h.77v-1zm8.13 0v1h1.13l-.14-1.12-.99.12zM8.13 14v1h.77l.2-.75-.97-.25zM0 14l-1-.12-.13 1.12H0v-1zm31.75 3h-8.13v2h8.13v-2zm-9.1.75A7 7 0 0115.89 23v2a9 9 0 008.71-6.75l-1.93-.5zM15.89 23a7 7 0 01-6.78-5.25l-1.94.5A9 9 0 0015.88 25v-2zm-7.75-6H0v2h8.13v-2zm7.75 14A15 15 0 01.99 17.88l-1.98.24A17 17 0 0015.88 33v-2zm14.88-13.12A15 15 0 0115.88 31v2a17 17 0 0016.86-14.88l-1.98-.24zM23.62 15h8.13v-2h-8.13v2zm-7.74-6a7 7 0 016.78 5.25l1.93-.5A9 9 0 0015.88 7v2zM9.1 14.25A7 7 0 0115.88 9V7a9 9 0 00-8.72 6.75l1.94.5zM0 15h8.13v-2H0v2zm1-.88A15 15 0 0115.87 1v-2A17 17 0 00-1 13.88l1.98.24zM15.87 1a15 15 0 0114.88 13.12l1.98-.24A17 17 0 0015.88-1v2z" fill="#fff" fill-opacity="0.2" mask="url(#:R36d6:-m)"></path><path d="M52.42 24.24c4.5 0 7.83-2.54 8.26-6.36h-4.37c-.33 1.63-1.94 2.69-3.89 2.69-2.7 0-4.46-1.66-4.46-5.33 0-3.65 1.75-5.3 4.46-5.3 2.02 0 3.5 1.1 3.9 2.66h4.36c-.43-3.8-3.7-6.34-8.26-6.34-5.32 0-8.88 3.24-8.88 8.98 0 5.76 3.56 9 8.88 9zm16.35 0c4.18 0 6.56-2.71 6.56-6.72 0-4.25-2.62-6.72-6.56-6.72-4.17 0-6.57 2.71-6.57 6.72 0 4.25 2.64 6.72 6.57 6.72zm0-3.29c-1.5 0-2.47-1.05-2.47-3.43 0-2.4.99-3.46 2.47-3.46 1.5 0 2.48 1.06 2.48 3.46s-.99 3.43-2.48 3.43zm8.6 3.05h4.06v-7.27c0-1.35.8-2.64 2.33-2.64 1.42 0 2 .96 2 2.93V24h4.07v-7.27c0-1.35.8-2.64 2.3-2.64 1.42 0 2.02.96 2.02 2.93V24h4.06v-7.87c0-3.87-1.94-5.33-4.4-5.33-1.91 0-3.57.94-4.14 2.8h-.2c-.7-2.06-2.3-2.8-4.05-2.8-1.68 0-3.2.84-3.8 2.47h-.19l-.12-2.23h-3.93V24zm23.5 0h4.05v-7.27c0-1.35.8-2.64 2.33-2.64 1.41 0 1.99.96 1.99 2.93V24h4.08v-7.27c0-1.35.8-2.64 2.3-2.64 1.42 0 2.02.96 2.02 2.93V24h4.05v-7.87c0-3.87-1.94-5.33-4.39-5.33-1.92 0-3.57.94-4.15 2.8h-.2c-.69-2.06-2.3-2.8-4.05-2.8-1.68 0-3.19.84-3.79 2.47h-.2l-.11-2.23h-3.94V24zm23.48-14.47h4.05V6.5h-4.05v3.03zm0 14.47h4.05V11.04h-4.05V24zm11.45 0h2.95v-3.26h-1.51c-.63 0-.99-.17-.99-.9V14.3h2.5v-3.26h-2.5v-3.8l-4.05.37v3.43h-2.23v3.26h2.23v6.3c0 2.06.72 3.4 3.6 3.4z" fill="#fff"></path><defs><linearGradient id=":R36d6:-g" x1="15.88" y1="0" x2="15.88" y2="32" gradientUnits="userSpaceOnUse"><stop stop-color="#AAE4FF"></stop><stop offset="1" stop-color="#38BDF8"></stop></linearGradient></defs></svg></Link>
                                </div>
                                <h1 className="mt-14 font-display text-4xl/tight font-light text-white">Open-source Git client
                                    <span className="text-sky-300">for macOS minimalists</span></h1>
                                <p className="mt-4 text-sm/6 text-gray-300">Commit is a lightweight Git client you can open from anywhere any time you’re ready to commit your work with a single keyboard shortcut. It’s fast, beautiful, and completely unnecessary.</p>
                                <form className="relative isolate mt-8 flex items-center pr-1"><label className="sr-only">Email address</label><input required type="email" name="email" id=":R96d6:" placeholder="Email address" className="peer w-0 flex-auto bg-transparent px-4 py-2.5 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-[0.8125rem]/6" /><button className="group relative isolate flex-none rounded-md py-1.5 text-[0.8125rem]/6 font-semibold text-white pl-2.5 pr-[calc(9/16*1rem)]" type="submit"><span className="absolute inset-0 rounded-md bg-gradient-to-b from-white/80 to-white opacity-10 transition-opacity group-hover:opacity-15"></span><span className="absolute inset-0 rounded-md opacity-7.5 shadow-[inset_0_1px_1px_white] transition-opacity group-hover:opacity-10"></span>Get updates<span aria-hidden="true">→</span></button><div className="absolute inset-0 -z-10 rounded-lg transition peer-focus:ring-4 peer-focus:ring-sky-300/15"></div><div className="absolute inset-0 -z-10 rounded-lg bg-white/2.5 ring-1 ring-white/15 transition peer-focus:ring-sky-300"></div></form>
                                <div className="mt-8 flex flex-wrap justify-center gap-x-1 gap-y-3 sm:gap-x-2 lg:justify-start">
                                    <Link className="flex-none group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-white/30 transition-colors hover:text-sky-300 gap-x-3" href="/#"><span className="absolute inset-0 -z-10 scale-75 rounded-lg bg-white/5 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"></span><svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" className="flex-none h-4 w-4"><path d="M7 3.41a1 1 0 0 0-.668-.943L2.275 1.039a.987.987 0 0 0-.877.166c-.25.192-.398.493-.398.812V12.2c0 .454.296.853.725.977l3.948 1.365A1 1 0 0 0 7 13.596V3.41ZM9 13.596a1 1 0 0 0 1.327.946l3.948-1.365c.429-.124.725-.523.725-.977V2.017c0-.32-.147-.62-.398-.812a.987.987 0 0 0-.877-.166L9.668 2.467A1 1 0 0 0 9 3.41v10.186Z"></path></svg><span className="self-baseline text-white">Documentation</span></Link><Link className="flex-none group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-white/30 transition-colors hover:text-sky-300 gap-x-3" href="/#"><span className="absolute inset-0 -z-10 scale-75 rounded-lg bg-white/5 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"></span><svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" className="flex-none h-4 w-4"><path d="M8 .198a8 8 0 0 0-8 8 7.999 7.999 0 0 0 5.47 7.59c.4.076.547-.172.547-.384 0-.19-.007-.694-.01-1.36-2.226.482-2.695-1.074-2.695-1.074-.364-.923-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.224 1.873.87 2.33.666.072-.518.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.954 0-.873.31-1.586.823-2.146-.09-.202-.36-1.016.07-2.118 0 0 .67-.214 2.2.82a7.67 7.67 0 0 1 2-.27 7.67 7.67 0 0 1 2 .27c1.52-1.034 2.19-.82 2.19-.82.43 1.102.16 1.916.08 2.118.51.56.82 1.273.82 2.146 0 3.074-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38A7.972 7.972 0 0 0 16 8.199a8 8 0 0 0-8-8Z"></path></svg><span className="self-baseline text-white">GitHub</span></Link><a className="flex-none group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-white/30 transition-colors hover:text-sky-300 gap-x-3" href="/rss/feed.xml"><span className="absolute inset-0 -z-10 scale-75 rounded-lg bg-white/5 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"></span><svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" className="flex-none h-4 w-4"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 3a.5.5 0 0 1 .5-.5h.5c5.523 0 10 4.477 10 10v.5a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5v-.5A8.5 8.5 0 0 0 3.5 4H3a.5.5 0 0 1-.5-.5V3Zm0 4.5A.5.5 0 0 1 3 7h.5A5.5 5.5 0 0 1 9 12.5v.5a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5v-.5a4 4 0 0 0-4-4H3a.5.5 0 0 1-.5-.5v-.5Zm0 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"></path></svg><span className="self-baseline text-white">RSS</span></a></div>
                            </div>

                        </div>
                        <div className="flex flex-1 items-end justify-center pb-4 lg:justify-start lg:pb-6"><p className="flex items-baseline gap-x-2 text-[0.8125rem]/6 text-gray-500">Brought to you by
                        <Link className="group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-white/30 transition-colors hover:text-sky-300 gap-x-2" href="/#"><span className="absolute inset-0 -z-10 scale-75 rounded-lg bg-white/5 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"></span><svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" className="flex-none h-6 w-6"><path d="M5.526 13.502c5.032 0 7.784-4.168 7.784-7.783 0-.119 0-.237-.008-.353a5.566 5.566 0 0 0 1.364-1.418 5.46 5.46 0 0 1-1.571.431c.571-.342.998-.88 1.203-1.513a5.483 5.483 0 0 1-1.737.664 2.738 2.738 0 0 0-4.662 2.495 7.767 7.767 0 0 1-5.638-2.858 2.737 2.737 0 0 0 .847 3.651 2.715 2.715 0 0 1-1.242-.341v.035a2.737 2.737 0 0 0 2.195 2.681 2.73 2.73 0 0 1-1.235.047 2.739 2.739 0 0 0 2.556 1.9 5.49 5.49 0 0 1-4.049 1.133A7.744 7.744 0 0 0 5.526 13.5"></path></svg><span className="self-baseline text-white">Joe Davola</span></Link></p></div>
                    </div>
                </div>

            </div>
            <div className="relative flex-auto">
                <div className="pointer-events-none absolute inset-0 z-50 overflow-hidden lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:overflow-visible"><svg className="absolute left-[max(0px,calc(50%-18.125rem))] top-0 h-full w-1.5 lg:left-full lg:ml-1 xl:left-auto xl:right-1 xl:ml-0" aria-hidden="true"><defs><pattern id=":R1t6:" width="6" height="8" patternUnits="userSpaceOnUse"><path d="M0 0H6M0 8H6" className="stroke-sky-900/10 dark:stroke-white/10 xl:stroke-white/10" fill="none"></path></pattern></defs><rect width="100%" height="100%" fill="url(#:R1t6:)"></rect></svg></div>
                <main className="space-y-20 py-20 sm:space-y-32 sm:py-32">
                    {
                        bussinesses &&
                        bussinesses.map((e, i) => {
                            return (
                                <article id="commit-message-suggestions" className="scroll-mt-16" key={i}>
                                    <div>
                                        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                                            <div className="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
                                                <div className="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto typography">
                                                    <div className="p-6 ring-1 ring-zinc-300 rounded-lg">
                                                        {e}
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </article>

                            );
                        })
                    }
                </main>
            </div>
        </div>
    );
}

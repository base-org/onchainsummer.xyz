import { FC } from 'react';
import Link from 'next/link';

import { TwitterIcon } from '@/components/icons/Twitter';
import { useMintDialogContext } from '@/components/MintDialog/Context/useMintDialogContext';
import { website } from '@/config/website';
import { WarpCast } from '@/components/icons/Warpcast';
import {Lens} from "@/components/icons/Lens";

const twitterURL: string = "https://twitter.com/intent/tweet";
const warpCastURL: string = "https://warpcast.com/";
const lensURL: string = "https://lenster.xyz/";

type ShareComponentProps = {}
export const Share:  FC<ShareComponentProps> = () => {
    const { dropName } =  useMintDialogContext();
    const shareText = `I just minted ${dropName}, celebrating the start of @BuildOnBase bringing billions of people onchain.%0aIt’s Onchain Summer.%0aonchainsummer.xyz`;

    const tweetUrl = `${twitterURL}?url=${website.url}&text=${shareText}`;
    const warpCastShareUrl = `${warpCastURL}/~/compose?text=${shareText}&embeds[]=${website.url}`;
    const lensShareUrl = `${lensURL}?text=${shareText}&url=${website.url}`;

    return (
        <div className="flex flex-row items-center m-[10px] gap-4">
            <div className="flex flex-col items-center space-x-2">
                <Link href={tweetUrl} target="_blank" className="flex flex-col items-center">
                    <TwitterIcon/>
                    <p className="text-sm font-mono uppercase text-[#858585] mt-[6px]">Twitter</p>
                </Link>
            </div>

            <div className="flex flex-col items-center space-x-2">
                <Link href={warpCastShareUrl} target="_blank" className="flex flex-col items-center">
                    <WarpCast/>
                    <p className="text-sm font-mono uppercase text-[#858585] mt-[6px]">Warpcast</p>
                </Link>
            </div>

            <div className="flex flex-col items-center space-x-2">
                <Link href={lensShareUrl} target="_blank" className="flex flex-col items-center">
                    <Lens/>
                    <p className="text-sm font-mono uppercase text-[#858585] mt-[6px]">Lens</p>
                </Link>
            </div>
        </div>
    )
}
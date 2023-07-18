"use client"
import { useCallback, useMemo } from 'react'
import { useSigner } from "@thirdweb-dev/react";
import * as OP from "@eth-optimism/sdk";

export default function Bridge () {
    const signer = useSigner();

    const messenger = useMemo(() => {
        if (!signer) return null;
        return new OP.CrossChainMessenger({
            l1ChainId: OP.L1ChainID.GOERLI,
            l2ChainId: OP.L2ChainID.BASE_GOERLI,
            l1SignerOrProvider: signer!,
            l2SignerOrProvider: signer!
        })
    }, [signer])

    const bridge = useCallback(async () => {
        if (!messenger) return;

        const response = await messenger.depositETH(1)
        console.log(`Transaction hash (on L1): ${response.hash}`)
        await response.wait()

    }, [messenger])
    

    return (
        <div>
            {messenger && <button onClick={bridge}> bridge! </button>}
            {/* make space :)  */}
            <p>hi</p>
            <p>hi</p>
            <p>hi</p>
            <p>hi</p>
        </div>
    )
}

// export default {Bridge}

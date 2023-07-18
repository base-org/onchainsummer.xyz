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
        const start = new Date()
        if (!messenger) return;

        const response = await messenger.depositETH(1)
        console.log(`Transaction hash (on L1): ${response.hash}`)
        await response.wait()
        console.log("Waiting for status to change to RELAYED")
        console.log(`Time so far ${(new Date().getSeconds() - start.getSeconds())/1000} seconds`)
        await messenger.waitForMessageStatus(response.hash, 
                                                        OP.MessageStatus.RELAYED) 

        await reportBalances()    
        console.log(`depositETH took ${(new Date().getSeconds()-start.getSeconds())/1000} seconds\n\n`)

    }, [messenger])

    const reportBalances = useCallback(async () => {
        if (!messenger) return;
        
        const l1Balance = (await messenger.l1Signer.getBalance()).toString().slice(0,-9)
        const l2Balance = (await messenger.l2Signer.getBalance()).toString().slice(0,-9)
      
        console.log(`On L1:${l1Balance} Gwei    On L2:${l2Balance} Gwei`)
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

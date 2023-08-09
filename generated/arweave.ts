export const arweaves = {
  'N-azs7y2g9xoEuZorhF96foLnZchpWqKYVmlrNvsUQw': {
    content: {
      body: '*Mint on [onchainsummer.xyz/base](https://onchainsummer.xyz/base)* \n\nWe built Base because we believe that bringing the world onchain has the potential to transform the future of the internet.\n\nIn the early 2000s, the internet first transformed the world. For the first time, developers were able to build applications that connected people no matter where they lived, bringing them together to read, write, and share information. This unlocked incredible new products, including streaming, search, social media, smartphones, and more.\n\nToday, we believe we’re on the verge of the next massive transformation: onchain. Onchain is the next generation of the internet that will increase economic freedom globally by putting ownership back in the hands of everyday people — and it’s growing fast.\n\nBase Day One commemorates that story, and acknowledges the fact that it will evolve as more people come onchain and collectively create what comes next.\n\nBase is for everyone. Mint to join us as we bring the world onchain.',
      timestamp: '1691600201',
      title: 'Welcome to Base, Day One',
    },
    digest: 'ai7vJwJ6SAd5AucQ9CbhYb-iZDLulaGkPYkJHSdjlXw',
    authorship: {
      contributor: '0xd3271DF159F18E07AAD79E79A24580BB5c4776e9',
      signingKey:
        '{"crv":"P-256","ext":true,"key_ops":["verify"],"kty":"EC","x":"rYILR2cCccpVaiJqcXmOcAadgUvcTI8_15GhQfhNUJU","y":"rr7TXKDoBIc7_tBgChmfmnO6mJjg5UrZBYAlOa2sp8c"}',
      signature:
        '0xc3dfaf0914e577e872891b6253201c59df80b1098fa690259b9c33a6072ea0d841b4d295b56a7cd2201a57fccc16875702e9886a3f55c25c68f7ae10be988b671b',
      signingKeySignature:
        'jarkM_-owdaXOCIWFu9Goto72E82__ctg-0U2EhI6zDRyWTKuWKa0lAvJTgs_faREUi7itAT2tnNRfTqtxHJAQ',
      signingKeyMessage:
        'I authorize publishing on mirror.xyz from this device using:\n{"crv":"P-256","ext":true,"key_ops":["verify"],"kty":"EC","x":"rYILR2cCccpVaiJqcXmOcAadgUvcTI8_15GhQfhNUJU","y":"rr7TXKDoBIc7_tBgChmfmnO6mJjg5UrZBYAlOa2sp8c"}',
      algorithm: { name: 'ECDSA', hash: 'SHA-256' },
    },
    version: '04-25-2022',
    wnft: {
      chainId: 10,
      description: 'Mint on onchainsummer.xyz/base\n',
      fundingRecipient: '0xd3271DF159F18E07AAD79E79A24580BB5c4776e9',
      imageURI: 'QmXAxKjzK3U623ZtNEKjok7SXRNyBNs89d2ozB2n7Ly5Xm',
      mediaAssetId: 644383,
      name: 'Welcome to Base, Day One',
      nonce: 4960588,
      owner: '0xd3271DF159F18E07AAD79E79A24580BB5c4776e9',
      price: 0,
      proxyAddress: '0xa9EDAfa73151B5D88C0493FCc27603f32862f0c3',
      renderer: '0xfd7c7F0B10ACDD4F2Ee2Ea5111767B98d42D0a07',
      supply: 0,
      symbol: 'WELCOMETOBASEDAYONE',
      hasCustomWnftMedia: false,
    },
  },
  GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw: {
    content: {
      body: 'All of Mirror’s posts are available to access on [Arweave](https://www.arweave.org/), an on-chain decentralized storage layer that makes it so that your posts exist forever (even if Mirror does not)!\n\nHere’s a basic tutorial on how to get data published on Mirror directly from Arweave:\n\n1. Grab the Mirror content digest from the end of a Mirror post URL. The URL for this post is `dev.mirror.xyz/GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw` and so the digest is `GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw`\n2. We’re going to plug this digest value into a query against [Arweave’s graphQL endpoint](https://www.google.com/search?q=arweave+graphql&rlz=1C5CHFA_enUS932US932&oq=arweave+graphql&aqs=chrome..69i57j69i61j69i60.2079j0j7&sourceid=chrome&ie=UTF-8) to render the data\n3. We’re going to make use of a couple of tags to get the Arweave transaction via GraphQL. Every post on Mirror has a few tags we can use to filter for the content:\n   1. `App-Name: MirrorXYZ` tells Arweave to scope the results to all posts on Mirror\n   2. `Original-Content-Digest: GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw` tells Arweave to return every single transaction that matches the requested content digest\n   3. By default, we upload every single published update on a post to Arweave, so the query returns a list. To get the most recently published update sent to Arweave, we just sort the results by block height and grab the newest transaction.\n4. Once, we have the Transaction ID we need, we can use the `getData` function in the [Arweave JS SDK](https://github.com/ArweaveTeam/arweave-js) to render the JSON content\n   1. We can also verify that we have the correct transaction ID navigating to `arweave.net/<TRANSACTION_ID>` which will render the JSON\n   2. Our digest `GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw` returns a transaction ID of `dysIrCovgAHJ6siGA5_r27Q59j2tv5wD4kqc1bxRFVE`, which renders the content you see [here](https://arweave.net/RM2C8OKruS_UmORwvyv1Q1w0e0aQaZWFRzFL1eGgpLg).\n\nThe GraphQL query is available as a gist [here](https://gist.github.com/saarim-mirror/2605fda5baf8b428385c872f6eb5d6d5).\n\nIn order to bypass requiring content digests to populate Mirror posts, you can use the `Contributor` tag to query for all posts made by a specific wallet. A full list of available tags is available on the `Transaction` GraphQL object.',
      timestamp: 1649101356,
      title: 'Retrieving posts directly from Arweave',
    },
    digest: 'SZ3uJdUzsN84mgFegfpWadXXdGyMN8c82dDdeQ2Hqo8',
    authorship: {
      contributor: '0xbDc4199575A5FA3F19e9888C5d51Bde798F404Cc',
      signingKey:
        '{"crv":"P-256","ext":true,"key_ops":["verify"],"kty":"EC","x":"ZuI92nV-lWAU5JzmextwvHr6far-KmDeisH1UBm76kI","y":"1WSCKrhyo079aoa_Lc9NgTU-_GzeQyekPQYx9yZjWno"}',
      signature:
        'WulpvqP7BUZNdYDhmIrdwInBmdpm2Z05LtL982-0SfYiYSfgsdkuJjDN6_V5_GsC2AWsUwP9_E6VE5huSHxW2g',
      signingKeySignature:
        '0x3aff95b6b112e38b6a36549ff942a77f65dce3030b47f336eb1ce3a8a617de51700f27e00bbb64a49a4398a6a1c6e54e9fbbb3f0cda8d53b8031a1771bbc12581c',
      signingKeyMessage:
        'I authorize publishing on mirror.xyz from this device using:\n{"crv":"P-256","ext":true,"key_ops":["verify"],"kty":"EC","x":"ZuI92nV-lWAU5JzmextwvHr6far-KmDeisH1UBm76kI","y":"1WSCKrhyo079aoa_Lc9NgTU-_GzeQyekPQYx9yZjWno"}',
      algorithm: { name: 'ECDSA', hash: 'SHA-256' },
    },
    nft: {},
    version: '12-21-2020',
    originalDigest: 'GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw',
  },
}

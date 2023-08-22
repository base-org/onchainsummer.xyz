import { Partner } from './types'
import { unlimited } from '../test-contracts'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'
import { MintType } from '@/components/MintDialog/types'

const nestcoin: Partner = {
  slug: 'onboard',
  name: 'Onboard',
  url: 'https://nestcoin.com/',
  description: `Onboard's mission is to create financial access in Africa. Teaming up with cultural trendsetters, they're highlighting the continent's rich heritage through captivating art and music. Show your support by minting "from Africa, with love".`,
  brandColor: '#000000',
  icon: '/partners/onboard/icon.png',
  banner: '/partners/onboard/banner-icon.svg',
  aarweaveDigest: 'isGtzFoGSsXNZl42Xt3SnNM9BoDOo_QrJ6F6mJNB2JA',
  twitter: '@nestcoin',
  drops: [
    {
      // TODO: Get image from s3
      image: '',
      creator: '0xaC94c7Be91204716dfb149a69ABf79E837e334B0',
      name: 'Sango: The Orisa’s & The Sonic Extension',
      description: `In this art piece, the Orisas stand tall, not only as symbols of ancient beliefs but as a testament to the unyielding spirit of African heritage. 
They remind us of the vibrant tapestry of gods and goddesses woven into the continent's history, reflecting the diverse mosaic of African traditions.  

Ṣàngó, the Yorùbá god of lightning, thunder, and justice, his resounding power echoing through time. Ọya, the queen goddess of the storm, River Niger, and rebirth, her presence fierce and transformative. Lastly, Ògún, the Yorùbá god of war and iron, embodying strength and innovation.  

Orisa: The Sonic Extension blends African melodies with modern sounds, celebrating our heritage and embracing the future.   

This work serves as a call to action, urging Africans to reclaim their narratives, embracing the profound richness of their cultural heritage.`,
      address: '0xeFfF9BA11AF7f7Dc7B13d8b7670400ccEEdec5c9',
      crossMintClientId: '2ca9136d-0697-453d-927d-a0612df3e1f8',
      mintType: MintType.ThirdWeb,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 23, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 27, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.003',
    },
    {
      // TODO: Get image from s3
      image: '',
      creator: '0xaC94c7Be91204716dfb149a69ABf79E837e334B0',
      name: 'Oya: The Orisa’s & The Sonic Extension',
      description: `In this art piece, the Orisas stand tall, not only as symbols of ancient beliefs but as a testament to the unyielding spirit of African heritage. 
They remind us of the vibrant tapestry of gods and goddesses woven into the continent's history, reflecting the diverse mosaic of African traditions.  

Ṣàngó, the Yorùbá god of lightning, thunder, and justice, his resounding power echoing through time. Ọya, the queen goddess of the storm, River Niger, and rebirth, her presence fierce and transformative. Lastly, Ògún, the Yorùbá god of war and iron, embodying strength and innovation.  

Orisa: The Sonic Extension blends African melodies with modern sounds, celebrating our heritage and embracing the future.   

This work serves as a call to action, urging Africans to reclaim their narratives, embracing the profound richness of their cultural heritage.`,
      address: '0x17468291F70765617B8f29eBEe6Ee7bFdD0cD0e8',
      crossMintClientId: '83ef0199-6676-46a7-90a3-678e7e1096dd',
      mintType: MintType.ThirdWeb,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 23, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 27, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.003',
    },
    {
      // TODO: Get image from s3
      image: '',
      creator: '0xaC94c7Be91204716dfb149a69ABf79E837e334B0',
      name: 'Ogun: The Orisa’s & The Sonic Extension',
      description: `In this art piece, the Orisas stand tall, not only as symbols of ancient beliefs but as a testament to the unyielding spirit of African heritage. 
They remind us of the vibrant tapestry of gods and goddesses woven into the continent's history, reflecting the diverse mosaic of African traditions.  

Ṣàngó, the Yorùbá god of lightning, thunder, and justice, his resounding power echoing through time. Ọya, the queen goddess of the storm, River Niger, and rebirth, her presence fierce and transformative. Lastly, Ògún, the Yorùbá god of war and iron, embodying strength and innovation.  

Orisa: The Sonic Extension blends African melodies with modern sounds, celebrating our heritage and embracing the future.   

This work serves as a call to action, urging Africans to reclaim their narratives, embracing the profound richness of their cultural heritage.`,
      address: '0x777CbC36e0eC88D07c82a62259E7BfD6dc54692B',
      crossMintClientId: 'c1d8962f-480e-4c6a-9e2e-9d159ab701c4',
      mintType: MintType.ThirdWeb,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 23, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 27, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.003',
    },
    {
      // TODO: Get image from s3
      image: '',
      creator: '0xaC94c7Be91204716dfb149a69ABf79E837e334B0',
      name: 'Masked Glory & African Man',
      description: `"Masked Glory" beautifully unveils the essence of African heritage, celebrating its rich cultural traditions and empowering viewers to embrace their masked glory with pride, while "African Man" is an inspiring anthem that fearlessly celebrates African identity, urging others to break free from societal masks and embrace their true selves with pride.`,
      address: '0xed90f66cE5124061879391c5FCcEaF4C34777F8C',
      crossMintClientId: '073860d9-16d2-4533-989d-db5dc66f0f28',
      mintType: MintType.ThirdWeb,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 23, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 27, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.003',
    },
    {
      // TODO: Get image from s3
      image: '',
      creator: '0xaC94c7Be91204716dfb149a69ABf79E837e334B0',
      name: 'Selfcare',
      description: `Selfcare celebrates being African by capturing the journey of embracing one's true self, with all its complexities and raw beauty. It serves as a powerful reminder for Africans to look within, to explore and accept themselves fully. 

By delving into this process of internal inspection and acceptance, we can ignite the spark of transformation and bring about positive changes in our lives and communities.

The artwork calls for an authentic introspection, encouraging us to zoom in on our unique identities, cultural heritage, and inherent strengths. 

By doing so, we can then zoom out and see the bigger picture of the extraordinary diversity and potential that lies within the African continent and its people.`,
      address: '0x21D661533CC6840b1aAb4Fdb9b5731D5AB708e8F',
      crossMintClientId: '35e73b00-d960-4a7c-85ad-f5dc4ff676d7',
      mintType: MintType.ThirdWeb,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 23, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 27, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.003',
    },
    {
      // TODO: Get image from s3
      image: '',
      creator: '0xaC94c7Be91204716dfb149a69ABf79E837e334B0',
      name: 'Lagos Labs',
      description: `This illustration is inspired by the Lagos Labs album by Elow.T.  

Lagos Labs is a captivating ode that exudes the distinctive essence of Lagos, Nigeria – its unique sound, rich culture, and vibrant spirit. It incorporates elements of the three main singles from the Lagos Labs album - Ekolowa, EBM, and Lagos Night. 

The album takes listeners on an enchanting journey from sun-soaked beaches to the bustling nightlife, offering an immersive experience into the city's pulsating heart.  

In this reimagined portrayal of Lagos' nightlife, the artist has blended the vibrant lights reminiscent of Broadway and the Vegas strip, enriched by a splendid synthwave color palette that resonates with the music that inspired it.`,
      address: '0xAF3Abbfe1732BE1bfE9B15DD8AeaB9e7EFeD9A88',
      crossMintClientId: '5aba38c9-7952-43b2-8ea9-794b194dc39d',
      mintType: MintType.ThirdWeb,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 23, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 27, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.003',
    },
  ],
}

export default nestcoin

import { Partner } from './types'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'
import { MintType } from '@/components/MintDialog/types'

const zora: Partner = {
  slug: 'zora',
  name: 'Zora',
  url: 'https://zora.co/',
  description:
    "Zora is bringing the world's imagination onchain. Imagine, mint and enjoy.",
  brandColor: '#000000',
  icon: '/partners/zora/icon.png',
  banner: '/partners/zora/banner-icon.svg',
  // TODO: update digest
  aarweaveDigest: '',
  // TODO: update twitter?
  twitter: '@lo',
  drops: [
    {
      image: '/partners/zora/drops/FINAL_ART-BASE -SummerZorb.png',
      creator: '0xf9FCD1fa7A5a3f2Cf6fe3a33e1262b74C04FeeDa',
      name: 'Summer Zorb',
      externalLink:
        'https://zora.co/collect/base:0xbd52c54ab5116b1d9326352f742e6544ffdeb2cb/1',
      type: 'external',
      startDate: Date.UTC(2023, 7, 16, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 31, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0',
      description: 'Have a great summer! Ours truly,',
      address: '0xbd52c54ab5116b1d9326352f742e6544ffdeb2cb',
      mintType: MintType.External,
      crossMintClientId: '',
    },
    {
      image: `https://assets.onchainsummer.xyz/FINAL_ART-Jah-Helmet%20City-Mecha_Gardens(TeaserTrailer).mp4`,
      creator: '0x9ED5c1B24478f5069fEbd8359A3869F971C365c3',
      name: 'Helmet City: Mecha Gardens (teaser trailer)',
      externalLink:
        'https://zora.co/collect/base:0x0651996B6a6EebD1fc697E5735A2dca541BbE06B',
      type: 'external',
      startDate: Date.UTC(2023, 7, 16, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 31, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0',
      description: `In the continuation of the acclaimed "Helmet City: Bodega Drip" series, the spotlight now shifts to Mecha Gardens, an impoverished district within the sprawling metropolis. "Helmet City: Mecha Gardens" uncovers the origins and untold stories that shroud the profound significance of helmets in this city. Through a collection of AI-generated images and an immersive short film, this installment unravels the history of Mecha Gardens, revealing its legacy and deep-rooted mysteries. Audiences are drawn into a world of intrigue and introspection, as they uncover the secrets behind the question,"why do they wear helmets?"`,
      address: '0x0651996B6a6EebD1fc697E5735A2dca541BbE06B',
      mintType: MintType.External,
      crossMintClientId: '',
    },
    {
      image: `https://assets.onchainsummer.xyz/FINAL_ART-Heno-CAN'T_LOSE_MY_COOL.mp4`,
      creator: '0xa838829224dA02187bf5983f280f8F3abE5FdA06',
      name: `Can't Lose My Cool`,
      externalLink:
        'https://zora.co/collect/base:0x6ee6e88eb8ae143bb9b4b4b0a2269a080a45ef7e',
      type: 'external',
      startDate: Date.UTC(2023, 7, 16, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 18, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0',
      description: `“Can’t Lose My Cool” is the latest addition to a cinematic world built through short, narrative pieces by Takoma Park, Maryland rapper Heno as a prologue to his forthcoming, full-length album, I’m Tired of Being Hypersurveilled. Using America’s invasive surveillance culture as the bedrock for a deeper, psychological analysis of self and surroundings, I’m Tired of Being Hypersurveilled is more than a collection of songs but a highly conceptual, thoughtfully themed critique against the invisible, all-seeing eye surveying today’s society and how it continues to support the oppressive systems that disproportionately impacts Black lives. Through the brief previews provided through teasers like “Can’t Lose My Cool,” Heno continues his slow-burning rollout that will amount to a creative inferno warming listeners, fans, and fellow artists for years to come.`,
      address: '0x6ee6e88eb8ae143bb9b4b4b0a2269a080a45ef7e',
      mintType: MintType.External,
      crossMintClientId: '',
    },
    {
      image: '/partners/zora/drops/FINAL_ART-MalihaAbidi.jpg',
      creator: '0x7be470E6DC93855338a4Cc85D47447811421C7c8',
      name: 'A Paragon',
      externalLink:
        'https://zora.co/collect/base:0xb999ec5e57000540cbf821addbc69c37bf506f9f',
      type: 'external',
      startDate: Date.UTC(2023, 7, 16, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 31, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0',
      description: `In "A Paragon” Maliha Abidi presents a captivating portrait of a South Asian woman who embodies societal standards of perfection. With meticulous detail, Abidi portrays the subject's flawlessness, while subtle nuances in expression and gaze hint at the complexity beneath. The artwork also invites the conversation to recognition the pressures faced, and the resilience held by women in meeting societal expectations. "A Paragon" poignantly prompts viewers to reflect on the hidden struggles behind perceived perfection and invites a reevaluation of the true essence of individual strength and identity within the confines of societal norms. Abidi’s piece explores themes of identity, societal pressures, resilience, and the contrast between expectations imposed and inner emotions.`,
      address: '0xb999ec5e57000540cbf821addbc69c37bf506f9f',
      mintType: MintType.External,
      crossMintClientId: '',
    },
  ],
}

export default zora

import { Button } from '@/components/Button'
import { Tabs } from '@/components/Tabs'

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-between">
      <h1>Peep these buttons</h1>
      <div className="h-full flex items-center gap-20">
        <div className="flex flex-col items-center gap-10">
          <Button variant="PRIMARY">Mint NFT</Button>
          <Button variant="PRIMARY" size="SMALL">
            Mint NFT
          </Button>
        </div>
        <div className="flex flex-col items-center gap-10">
          <Button variant="SECONDARY">Mint NFT</Button>
          <Button variant="SECONDARY" size="SMALL">
            Mint NFT
          </Button>
        </div>
        <div className="flex flex-col items-center gap-10">
          <Button variant="TERTIARY">Mint NFT</Button>
          <Button variant="TERTIARY" size="SMALL">
            Mint NFT
          </Button>
        </div>
      </div>
      <Tabs />
    </main>
  )
}

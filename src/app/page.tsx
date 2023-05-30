import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-between">
      <h1>No Party Like an S-Club Party</h1>
      <Image
        src="/pikachu.png"
        alt="Pikachu doing Pikachu"
        className="dark:invert"
        width={400}
        height={24}
        priority
      />
    </main>
  )
}

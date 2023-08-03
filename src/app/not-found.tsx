import { Button } from '@/components/Button'

export default function NotFound() {
  return (
    <div className="flex h-full w-full justify-center items-center px-6 pt-[136px] pb-[184px] xl:px-0">
      <div className="max-w-[374px]">
        <h2 className="text-center text-[32px] mb-4">Oops, page not found!</h2>
        <p className="text-center mb-8 text-[#444444]">
          We couldn&rsquo;t find what you were looking for.
        </p>
        <Button href="/">GO TO HOME</Button>
      </div>
    </div>
  )
}

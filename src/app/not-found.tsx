import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex h-full flex-col items-center relative px-6 pb-36 pt-10 xl:px-0">
      <h1>Not Found</h1>
      <p>Could not find requested resource</p>
      <p>
        View <Link href="/">home</Link>
      </p>
    </div>
  )
}

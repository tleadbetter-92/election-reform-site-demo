import Link from 'next/link'
import { fetchLaws } from './utils/fetchLaws'

export default async function Home() {
  const laws = await fetchLaws()

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Election Reform Laws</h1>
        <div className="grid gap-6">
          {laws.map((law, index) => (
            <Link key={index} href={`/laws/${encodeURIComponent(law.shortTitle)}`} className="block">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-semibold mb-2 text-gray-800">{law.shortTitle}</h2>
                <p className="text-gray-600">{law.longTitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}


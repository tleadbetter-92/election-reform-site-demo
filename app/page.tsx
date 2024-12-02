import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Assisted Dying for Terminally Ill Adults Bill</h1>
        <p className="text-gray-700 mb-6">
          A Bill to allow adults who are terminally ill, subject to safeguards, to be assisted to end their own life; and for connected purposes.
        </p>
        <Link 
          href="https://bills.parliament.uk/bills/3741" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors inline-block"
        >
          View on Parliament Website
        </Link>
      </div>
    </div>
  )
}


import Link from 'next/link';
import { Law } from '../utils/fetchLaws';

interface LawPageProps {
  law: Law;
}

export function LawPage({ law }: LawPageProps) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">{law.shortTitle}</h1>
        <p className="text-gray-700 mb-6">{law.longTitle}</p>
        <Link 
          href={law.pdfLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors inline-block"
        >
          View on Parliament Website
        </Link>
      </div>
    </div>
  );
}


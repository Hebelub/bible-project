'use client'

import Link from 'next/link'

export default function BiblePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Bible Explorer
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the Bible with interactive features, multiple translations, and rich context.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mb-12">
          <Link 
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold mr-8"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <Link 
            href="/genealogy"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            Genealogy
          </Link>
        </div>

        {/* Book Selection */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/bible/ruth" className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow hover:scale-105">
            <div className="text-5xl mb-6">📖</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Book of Ruth</h3>
            <p className="text-gray-600 mb-6">
              A beautiful story of loyalty, love, and redemption. Follow Ruth&apos;s journey from Moab to Bethlehem.
            </p>
            <div className="text-blue-600 font-semibold">Read Now →</div>
          </Link>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-5xl mb-6">📚</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">More Books</h3>
            <p className="text-gray-600 mb-6">
              Additional books and translations will be available soon.
            </p>
            <div className="text-gray-400 font-semibold">Coming Soon →</div>
          </div>
        </div>
      </div>
    </div>
  )
}

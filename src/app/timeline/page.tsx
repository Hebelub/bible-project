'use client'

import Link from 'next/link'

export default function TimelinePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Biblical Timeline</h1>
          <p className="text-lg text-gray-600 mb-6">
            Choose your preferred view to explore the chronological order of biblical figures
          </p>
          
          {/* Navigation */}
          <div className="flex justify-center space-x-6 mb-6">
            <Link 
              href="/"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Home
            </Link>
            <Link 
              href="/genealogy"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Genealogy
            </Link>
            <Link 
              href="/bible"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Bible
            </Link>
          </div>
        </div>

        {/* View Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Events View Card */}
          <Link href="/timeline/events" className="block">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="text-center">
                <div className="text-6xl mb-4">📅</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Events View</h2>
                <p className="text-gray-600 mb-6">
                  Explore individual birth and death events in chronological order. 
                  Each event is displayed as a card with detailed information.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Features:</h3>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Individual event cards</li>
                    <li>• Birth and death filters</li>
                    <li>• Horizontal scrolling</li>
                    <li>• Clickable person names</li>
                  </ul>
                </div>
              </div>
            </div>
          </Link>

          {/* Lifespans View Card */}
          <Link href="/timeline/lifespans" className="block">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="text-center">
                <div className="text-6xl mb-4">📊</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Lifespans View</h2>
                <p className="text-gray-600 mb-6">
                  View complete lifespans as horizontal lines showing birth to death. 
                  See overlapping lives and relative time periods.
                </p>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">Features:</h3>
                  <ul className="text-sm text-purple-800 space-y-1">
                    <li>• Horizontal lifespan lines</li>
                    <li>• Overlap detection</li>
                    <li>• Year markers</li>
                    <li>• Interactive tooltips</li>
                  </ul>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Navigation Tips</h3>
            <p className="text-gray-600 mb-4">
                             Both views share the same book selection and time range settings. 
               You can use your browser&apos;s back and forward buttons to navigate between views.
            </p>
            <div className="flex justify-center space-x-4 text-sm text-gray-500">
              <span>🖱️ Use mouse back button</span>
              <span>⌨️ Use keyboard shortcuts</span>
              <span>📱 Works on mobile too</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { locationsData } from '~/data/locations'

export default function LocationDetailPage() {
  const params = useParams()
  const id = parseInt(params.id as string)
  
  const location = locationsData.find(loc => loc.id === id)

  // Format year for display
  const formatYear = (year: number) => {
    if (year < 0) {
      return `${Math.abs(year)} BC`
    }
    return `${year} AD`
  }

  if (!location) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="text-red-600 text-6xl mb-4">❌</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Location Not Found</h1>
            <p className="text-gray-600 mb-6">The location you're looking for doesn't exist.</p>
            <Link 
              href="/locations"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Locations
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="flex justify-center space-x-6 mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-semibold">
            Home
          </Link>
          <Link href="/genealogy" className="text-blue-600 hover:text-blue-800 font-semibold">
            Genealogy
          </Link>
          <Link href="/timeline" className="text-blue-600 hover:text-blue-800 font-semibold">
            Timeline
          </Link>
          <Link href="/bible" className="text-blue-600 hover:text-blue-800 font-semibold">
            Bible
          </Link>
          <Link href="/locations" className="text-blue-600 hover:text-blue-800 font-semibold">
            Locations
          </Link>
        </div>

        {/* Location Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="text-6xl">{location.emoji}</div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900">{location.name}</h1>
                <div className="text-lg text-gray-600 capitalize">{location.locationType}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Time Period</div>
              <div className="text-lg font-semibold text-gray-900">
                {formatYear(location.startYear)} - {formatYear(location.endYear)}
              </div>
            </div>
          </div>

          {/* General Information */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">General Information</h2>
            <p className="text-gray-700 leading-relaxed">{location.generalInfo}</p>
          </div>

          {/* Biblical References */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Biblical References</h2>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-sm text-blue-800">
                {location.biblicalReferences.split(',').map((reference, index) => (
                  <div key={index} className="mb-1">
                    • {reference.trim()}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Important Events */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Important Events</h2>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-sm text-green-800">
                {location.importantEvents.split(';').map((event, index) => (
                  <div key={index} className="mb-1">
                    • {event.trim()}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Coordinates */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Location</h2>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Coordinates: {location.coordinates}
              </div>
              <a
                href={`https://www.google.com/maps?q=${location.coordinates}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Back to Locations */}
        <div className="text-center">
          <Link 
            href="/locations"
            className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            ← Back to All Locations
          </Link>
        </div>
      </div>
    </div>
  )
}

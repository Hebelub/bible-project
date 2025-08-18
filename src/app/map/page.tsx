'use client'

import { useState } from 'react'
import Link from 'next/link'
import { locationsData } from '~/data/locations'

export default function MapPage() {
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null)
  const [showAllLocations, setShowAllLocations] = useState(true)
  const [selectedType, setSelectedType] = useState<string>('all')

  // Filter locations based on type
  const filteredLocations = locationsData.filter(location => {
    return selectedType === 'all' || location.locationType === selectedType
  })

  // Get unique location types for filter
  const locationTypes = [...new Set(locationsData.map(loc => loc.locationType))]

  // Format year for display
  const formatYear = (year: number) => {
    if (year < 0) {
      return `${Math.abs(year)} BC`
    }
    return `${year} AD`
  }

  // Function to make biblical references clickable
  function makeReferencesClickable(references: string) {
    const parts = references.split(/([A-Za-z]+\s+\d+:\d+)/g)
    
    return parts.map((part, index) => {
      // Check if this part is a biblical reference (e.g., "Ruth 1:1")
      if (/^[A-Za-z]+\s+\d+:\d+$/.test(part)) {
        return (
          <Link
            key={index}
            href={`/bible/${part.toLowerCase().split(' ')[0]}`}
            className="text-purple-600 hover:text-purple-800 hover:underline font-medium"
          >
            {part}
          </Link>
        )
      }
      
      return part
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Biblical Map</h1>
          <p className="text-lg text-gray-600 mb-6">
            Explore the geographical locations mentioned in the Bible on an interactive map
          </p>
          
          {/* Navigation */}
          <div className="flex justify-center space-x-6 mb-6">
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-semibold">
              Home
            </Link>
            <Link href="/genealogy" className="text-blue-600 hover:text-blue-800 font-semibold">
              Genealogy
            </Link>
            <Link href="/timeline" className="text-blue-600 hover:text-blue-800 font-semibold">
              Timeline
            </Link>
            <Link href="/locations" className="text-blue-600 hover:text-blue-800 font-semibold">
              Locations
            </Link>
            <Link href="/bible" className="text-blue-600 hover:text-blue-800 font-semibold">
              Bible
            </Link>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Location Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Types</option>
                {locationTypes.map(type => (
                  <option key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Show All Toggle */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Display Options
              </label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={showAllLocations}
                    onChange={(e) => setShowAllLocations(e.target.checked)}
                    className="mr-2"
                  />
                  <span className="text-sm">Show all locations</span>
                </label>
              </div>
            </div>

            {/* Stats */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Statistics
              </label>
              <div className="text-sm text-gray-600 space-y-1">
                <div>Total Locations: {locationsData.length}</div>
                <div>Showing: {filteredLocations.length}</div>
                <div>Types: {locationTypes.length}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Container */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="relative">
            {/* Map Image */}
            <div className="relative w-full h-[600px] bg-gray-100 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Biblical Map</h3>
                  <p className="text-gray-600 mb-4">
                    Interactive map showing biblical locations
                  </p>
                  <div className="text-sm text-gray-500">
                    <p>Mediterranean Sea (West)</p>
                    <p>Jordan River (Center)</p>
                    <p>Dead Sea (South)</p>
                    <p>Sea of Galilee (North)</p>
                  </div>
                </div>
              </div>

              {/* Location Markers */}
              {showAllLocations && filteredLocations.map((location) => {
                // Parse coordinates (assuming format "lat,lng")
                const coords = location.coordinates.split(',').map(Number)
                const lat = coords[0]
                const lng = coords[1]
                
                // Skip if coordinates are invalid
                if (lat === undefined || lng === undefined || isNaN(lat) || isNaN(lng)) {
                  return null
                }
                
                // Convert coordinates to relative positions on the map
                // This is a simplified mapping - in a real app you'd use proper map projection
                const left = ((lng + 180) / 360) * 100 // Convert longitude to percentage
                const top = ((90 - lat) / 180) * 100 // Convert latitude to percentage
                
                return (
                  <div
                    key={location.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                    style={{ left: `${left}%`, top: `${top}%` }}
                    onClick={() => setSelectedLocation(location.id)}
                  >
                    <div className="text-2xl hover:scale-125 transition-transform">
                      {location.emoji}
                    </div>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-white rounded-lg shadow-lg p-3 whitespace-nowrap text-sm">
                        <div className="font-semibold text-gray-900">{location.name}</div>
                        <div className="text-gray-600 capitalize">{location.locationType}</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Selected Location Details */}
        {selectedLocation && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            {(() => {
              const location = locationsData.find(loc => loc.id === selectedLocation)
              if (!location) return null

              return (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">{location.emoji}</div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">{location.name}</h2>
                        <div className="text-lg text-gray-600 capitalize">{location.locationType}</div>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedLocation(null)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* General Information */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">General Information</h3>
                      <p className="text-gray-700 leading-relaxed">{location.generalInfo}</p>
                    </div>

                    {/* Time Period */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Time Period</h3>
                      <div className="text-gray-700">
                        {formatYear(location.startYear)} - {formatYear(location.endYear)}
                      </div>
                    </div>

                    {/* Biblical References */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Biblical References</h3>
                      <div className="text-gray-700">
                        {makeReferencesClickable(location.biblicalReferences)}
                      </div>
                    </div>

                    {/* Important Events */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Important Events</h3>
                      <div className="text-gray-700">
                        {location.importantEvents.split(';').map((event, index) => (
                          <div key={index} className="mb-1">• {event.trim()}</div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-200">
                    <div className="text-sm text-gray-600">
                      Coordinates: {location.coordinates}
                    </div>
                    <div className="flex space-x-4">
                      <a
                        href={`https://www.google.com/maps?q=${location.coordinates}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                      >
                        View on Google Maps
                      </a>
                      <Link
                        href={`/locations/${location.id}`}
                        className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm"
                      >
                        View Full Details
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })()}
          </div>
        )}

        {/* Legend */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Map Legend</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {locationTypes.map(type => (
              <div key={type} className="flex items-center space-x-2">
                <span className="text-xl">
                  {locationsData.find(loc => loc.locationType === type)?.emoji || '📍'}
                </span>
                <span className="text-sm text-gray-700 capitalize">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

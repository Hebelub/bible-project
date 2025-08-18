'use client'

import { useState } from 'react'
import Link from 'next/link'
import { locationsData } from '~/data/locations'

export default function LocationsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState<string>('all')
  
  const locations = locationsData

  // Filter locations based on search query and type
  const filteredLocations = locations.filter(location => {
    const matchesSearch = location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         location.generalInfo.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = selectedType === 'all' || location.locationType === selectedType
    return matchesSearch && matchesType
  })

  // Get unique location types for filter
  const locationTypes = [...new Set(locations.map(loc => loc.locationType))]

  // Format year for display
  const formatYear = (year: number) => {
    if (year < 0) {
      return `${Math.abs(year)} BC`
    }
    return `${year} AD`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Biblical Locations</h1>
          <p className="text-lg text-gray-600 mb-6">
            Explore the places mentioned in the Bible - cities, mountains, rivers, and regions that shaped biblical history
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
              href="/timeline"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Timeline
            </Link>
            <Link 
              href="/bible"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Bible
            </Link>
          </div>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Locations
              </label>
              <input
                type="text"
                placeholder="Search by name or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Type Filter */}
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

            {/* Stats */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Statistics
              </label>
              <div className="text-sm text-gray-600 space-y-1">
                <div>Total Locations: {locations.length}</div>
                <div>Showing: {filteredLocations.length}</div>
                <div>Types: {locationTypes.length}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Locations Grid */}
        {filteredLocations.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🗺️</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Locations Found</h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLocations.map((location) => (
              <Link key={location.id} href={`/locations/${location.id}`}>
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                  {/* Location Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{location.emoji}</div>
                    <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {location.locationType}
                    </div>
                  </div>

                  {/* Location Name */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {location.name}
                  </h3>

                  {/* Time Period */}
                  <div className="text-sm text-gray-600 mb-3">
                    <span className="font-medium">Time Period:</span> {formatYear(location.startYear)} - {formatYear(location.endYear)}
                  </div>

                  {/* General Info Preview */}
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                    {location.generalInfo}
                  </p>

                  {/* Biblical References Preview */}
                  <div className="text-xs text-gray-500 mb-3">
                    <span className="font-medium">References:</span> {location.biblicalReferences.split(',')[0]}...
                  </div>

                  {/* Important Events Preview */}
                  <div className="text-xs text-blue-600">
                    <span className="font-medium">Key Events:</span> {location.importantEvents.split(';')[0]}...
                  </div>

                  {/* Click indicator */}
                  <div className="mt-4 text-xs text-blue-600 font-medium">
                    Click for details →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">About Biblical Locations</h3>
            <p className="text-gray-600 mb-4">
              These locations span thousands of years of biblical history, from the ancient cities of the Old Testament 
              to the places where Jesus walked and the early church was established. Each location has played a crucial 
              role in the biblical narrative and continues to hold significance for believers today.
            </p>
            <div className="flex justify-center space-x-4 text-sm text-gray-500">
              <span>🏘️ Cities & Towns</span>
              <span>⛰️ Mountains & Hills</span>
              <span>🌊 Rivers & Lakes</span>
              <span>🏛️ Regions & Countries</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

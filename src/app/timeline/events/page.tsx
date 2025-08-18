'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { genealogyData, type Person } from '~/data/genealogy'
import { locationsData } from '~/data/locations'

interface TimelinePerson extends Person {
  displayYear: number
  eventType: 'birth' | 'death'
}

interface TimelineLocation {
  id: number
  name: string
  displayYear: number
  eventType: 'start' | 'end'
  startYear: number
  endYear: number
  emoji: string
  locationType: string
  generalInfo: string
  biblicalReferences: string
  importantEvents: string
  coordinates: string
}

export default function TimelineEventsPage() {
  const [startYear, setStartYear] = useState(-4000)
  const [endYear, setEndYear] = useState(100)
  const [selectedEvent, setSelectedEvent] = useState<TimelinePerson | TimelineLocation | null>(null)
  const [showBirths, setShowBirths] = useState(true)
  const [showDeaths, setShowDeaths] = useState(true)
  const [showLocations, setShowLocations] = useState(false)
  const [selectedBook, setSelectedBook] = useState<string>('all')
  const timelineRef = useRef<HTMLDivElement>(null)

  // Book time ranges
  const bookTimeRanges: Record<string, { start: number; end: number }> = {
    'all': { start: -4000, end: 100 },
    'ruth': { start: -1200, end: -1000 } // Approximate time period for Ruth
  }

  // Restore settings from localStorage
  useEffect(() => {
    const savedBook = localStorage.getItem('timelineSelectedBook')
    if (savedBook && bookTimeRanges[savedBook]) {
      setSelectedBook(savedBook)
      const range = bookTimeRanges[savedBook]
      setStartYear(range.start)
      setEndYear(range.end)
    }
  }, [])

  // Save book selection to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('timelineSelectedBook', selectedBook)
  }, [selectedBook])

  // Handle book selection
  const handleBookChange = (book: string) => {
    setSelectedBook(book)
    const range = bookTimeRanges[book]
    if (range) {
      setStartYear(range.start)
      setEndYear(range.end)
    }
  }

  // Create timeline events from genealogy data
  const timelineEvents: (TimelinePerson | TimelineLocation)[] = []
  
  // Add person events
  genealogyData.forEach(person => {
    if (showBirths) {
      timelineEvents.push({
        ...person,
        displayYear: person.birthYear,
        eventType: 'birth'
      })
    }
    if (showDeaths) {
      timelineEvents.push({
        ...person,
        displayYear: person.deathYear,
        eventType: 'death'
      })
    }
  })

  // Add location events
  if (showLocations) {
    locationsData.forEach(location => {
      timelineEvents.push({
        id: location.id,
        name: location.name,
        displayYear: location.startYear,
        eventType: 'start',
        startYear: location.startYear,
        endYear: location.endYear,
        emoji: location.emoji,
        locationType: location.locationType,
        generalInfo: location.generalInfo,
        biblicalReferences: location.biblicalReferences,
        importantEvents: location.importantEvents,
        coordinates: location.coordinates
      })
      timelineEvents.push({
        id: location.id,
        name: location.name,
        displayYear: location.endYear,
        eventType: 'end',
        startYear: location.startYear,
        endYear: location.endYear,
        emoji: location.emoji,
        locationType: location.locationType,
        generalInfo: location.generalInfo,
        biblicalReferences: location.biblicalReferences,
        importantEvents: location.importantEvents,
        coordinates: location.coordinates
      })
    })
  }

  // Sort by year
  timelineEvents.sort((a, b) => a.displayYear - b.displayYear)

  // Filter by year range
  const filteredEvents = timelineEvents.filter(
    event => event.displayYear >= startYear && event.displayYear <= endYear
  )

  // Format year for display
  const formatYear = (year: number) => {
    if (year < 0) {
      return `${Math.abs(year)} BC`
    }
    return `${year} AD`
  }

  // Get event color based on type
  const getEventColor = (eventType: 'birth' | 'death' | 'start' | 'end') => {
    if (eventType === 'birth') return 'bg-green-500'
    if (eventType === 'death') return 'bg-red-500'
    if (eventType === 'start') return 'bg-blue-500'
    return 'bg-purple-500' // end
  }

  // Get event icon
  const getEventIcon = (eventType: 'birth' | 'death' | 'start' | 'end') => {
    if (eventType === 'birth') return '👶'
    if (eventType === 'death') return '💀'
    if (eventType === 'start') return '🏗️'
    return '🏛️' // end
  }

  // Get event border color
  const getEventBorderColor = (eventType: 'birth' | 'death' | 'start' | 'end') => {
    if (eventType === 'birth') return 'border-green-200'
    if (eventType === 'death') return 'border-red-200'
    if (eventType === 'start') return 'border-blue-200'
    return 'border-purple-200' // end
  }

  // Type guard to check if event is a person
  const isPerson = (event: TimelinePerson | TimelineLocation): event is TimelinePerson => {
    return 'birthYear' in event && 'deathYear' in event
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Biblical Timeline - Events</h1>
          <p className="text-lg text-gray-600 mb-6">
            Explore individual birth and death events in chronological order
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
            <Link 
              href="/timeline/lifespans"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Switch to Lifespans View
            </Link>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Book Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Biblical Book
              </label>
              <select
                value={selectedBook}
                onChange={(e) => handleBookChange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Time Periods</option>
                <option value="ruth">Book of Ruth</option>
              </select>
            </div>

            {/* Year Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Start Year
              </label>
              <input
                type="number"
                value={startYear}
                onChange={(e) => setStartYear(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                End Year
              </label>
              <input
                type="number"
                value={endYear}
                onChange={(e) => setEndYear(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Event Type Filters */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Show Events
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={showBirths}
                    onChange={(e) => setShowBirths(e.target.checked)}
                    className="mr-2"
                  />
                  <span className="text-sm">Births 👶</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={showDeaths}
                    onChange={(e) => setShowDeaths(e.target.checked)}
                    className="mr-2"
                  />
                  <span className="text-sm">Deaths 💀</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={showLocations}
                    onChange={(e) => setShowLocations(e.target.checked)}
                    className="mr-2"
                  />
                  <span className="text-sm">Locations 🗺️</span>
                </label>
              </div>
            </div>

            {/* Stats */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Statistics
              </label>
              <div className="text-sm text-gray-600 space-y-1">
                <div>Total Events: {filteredEvents.length}</div>
                <div>Time Span: {formatYear(startYear)} - {formatYear(endYear)}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          {/* Timeline Header */}
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Scroll horizontally to explore individual events</span>
              <span>Click on events for details</span>
            </div>
          </div>

          {/* Events View */}
          <div 
            ref={timelineRef}
            className="flex space-x-4 overflow-x-auto pb-4"
            style={{ scrollbarWidth: 'thin', scrollbarColor: '#CBD5E0 #F7FAFC' }}
          >
            {filteredEvents.map((event, index) => (
              <div
                key={`${event.id}-${event.eventType}`}
                className={`flex-shrink-0 w-64 bg-white border-2 ${getEventBorderColor(event.eventType)} rounded-lg p-4 cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105`}
                onClick={() => setSelectedEvent(event)}
              >
                {/* Event Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-3 h-3 ${getEventColor(event.eventType)} rounded-full`}></div>
                  <div className="text-xs text-gray-500 font-medium">
                    {formatYear(event.displayYear)}
                  </div>
                </div>

                {/* Event Icon and Type */}
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2">{getEventIcon(event.eventType)}</span>
                  <span className={`text-sm font-semibold uppercase tracking-wide ${
                    event.eventType === 'birth' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {event.eventType}
                  </span>
                </div>

                {/* Event Name */}
                {isPerson(event) ? (
                  <Link href={`/genealogy/${event.id}`} className="block">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                      {event.name}
                    </h3>
                  </Link>
                ) : (
                  <Link href={`/locations/${event.id}`} className="block">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-green-600 transition-colors">
                      {event.name}
                    </h3>
                  </Link>
                )}

                {/* Event Info */}
                <div className="text-sm text-gray-600">
                  {isPerson(event) ? (
                    <>
                      <div className="flex justify-between">
                        <span>Birth:</span>
                        <span>{formatYear(event.birthYear)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Death:</span>
                        <span>{formatYear(event.deathYear)}</span>
                      </div>
                      <div className="flex justify-between font-medium">
                        <span>Lifespan:</span>
                        <span>{event.deathYear - event.birthYear} years</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex justify-between">
                        <span>Start:</span>
                        <span>{formatYear(event.startYear)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>End:</span>
                        <span>{formatYear(event.endYear)}</span>
                      </div>
                      <div className="flex justify-between font-medium">
                        <span>Duration:</span>
                        <span>{event.endYear - event.startYear} years</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Type:</span>
                        <span className="capitalize">{event.locationType}</span>
                      </div>
                    </>
                  )}
                </div>

                {/* Click indicator */}
                <div className="mt-3 text-xs text-blue-600 font-medium">
                  Click for details →
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📅</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Events Found</h3>
              <p className="text-gray-600">
                Try adjusting the year range or filters to see more events.
              </p>
            </div>
          )}
        </div>

        {/* Selected Event Details */}
        {selectedEvent && (
          <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-gray-900">{selectedEvent.name}</h2>
              <button
                onClick={() => setSelectedEvent(null)}
                className="text-gray-400 hover:text-gray-600 text-xl"
              >
                ✕
              </button>
            </div>
            
            {isPerson(selectedEvent) ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Timeline</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Birth:</span>
                        <span className="font-medium">{formatYear(selectedEvent.birthYear)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Death:</span>
                        <span className="font-medium">{formatYear(selectedEvent.deathYear)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Lifespan:</span>
                        <span className="font-medium">{selectedEvent.deathYear - selectedEvent.birthYear} years</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Family</h3>
                    <div className="space-y-2">
                      {selectedEvent.fatherId && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Father:</span>
                          <Link 
                            href={`/genealogy/${selectedEvent.fatherId}`}
                            className="text-blue-600 hover:text-blue-800 font-medium"
                          >
                            {genealogyData.find(p => p.id === selectedEvent.fatherId)?.name}
                          </Link>
                        </div>
                      )}
                      {selectedEvent.motherId && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Mother:</span>
                          <Link 
                            href={`/genealogy/${selectedEvent.motherId}`}
                            className="text-blue-600 hover:text-blue-800 font-medium"
                          >
                            {genealogyData.find(p => p.id === selectedEvent.motherId)?.name}
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Information</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedEvent.generalInfo}</p>
                </div>
                
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Biblical References</h3>
                  <p className="text-gray-700">{selectedEvent.biblicalReferences}</p>
                </div>
                
                <div className="mt-6">
                  <Link
                    href={`/genealogy/${selectedEvent.id}`}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    View Full Profile →
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Timeline</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Start:</span>
                        <span className="font-medium">{formatYear(selectedEvent.startYear)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">End:</span>
                        <span className="font-medium">{formatYear(selectedEvent.endYear)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-medium">{selectedEvent.endYear - selectedEvent.startYear} years</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Location Details</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Type:</span>
                        <span className="font-medium capitalize">{selectedEvent.locationType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Coordinates:</span>
                        <span className="font-medium">{selectedEvent.coordinates}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Information</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedEvent.generalInfo}</p>
                </div>
                
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Biblical References</h3>
                  <p className="text-gray-700">{selectedEvent.biblicalReferences}</p>
                </div>
                
                <div className="mt-6">
                  <Link
                    href={`/locations/${selectedEvent.id}`}
                    className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                  >
                    View Full Details →
                  </Link>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

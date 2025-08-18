'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { genealogyData, type Person } from '~/data/genealogy'

interface LifespanLine {
  person: Person
  startYear: number
  endYear: number
  yPosition: number
  startPercent: number
  endPercent: number
}

export default function TimelineLifespansPage() {
  const [startYear, setStartYear] = useState(-4000)
  const [endYear, setEndYear] = useState(100)
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null)
  const [selectedBook, setSelectedBook] = useState<string>('all')

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

  // Create lifespan lines for the lifespan view
  const createLifespanLines = (): LifespanLine[] => {
    const people = genealogyData.filter(person => 
      person.birthYear >= startYear && person.deathYear <= endYear
    )
    
    const lines: LifespanLine[] = []
    const totalYears = endYear - startYear
    
    people.forEach((person, index) => {
      const startPercent = ((person.birthYear - startYear) / totalYears) * 100
      const endPercent = ((person.deathYear - startYear) / totalYears) * 100
      
      // Find a y-position that doesn't overlap with existing lines
      let yPosition = 0
      let foundPosition = false
      
      while (!foundPosition) {
        const overlapping = lines.some(line => 
          line.yPosition === yPosition &&
          !(endPercent < line.startPercent || startPercent > line.endPercent)
        )
        
        if (!overlapping) {
          foundPosition = true
        } else {
          yPosition += 60 // Height of each line + spacing
        }
      }
      
      lines.push({
        person,
        startYear: person.birthYear,
        endYear: person.deathYear,
        yPosition,
        startPercent,
        endPercent
      })
    })
    
    return lines.sort((a, b) => a.startYear - b.startYear)
  }

  const lifespanLines = createLifespanLines()

  // Format year for display
  const formatYear = (year: number) => {
    if (year < 0) {
      return `${Math.abs(year)} BC`
    }
    return `${year} AD`
  }

  // Calculate position for lifespan line
  const getLifespanPosition = (year: number) => {
    const totalYears = endYear - startYear
    return ((year - startYear) / totalYears) * 100
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Biblical Timeline - Lifespans</h1>
          <p className="text-lg text-gray-600 mb-6">
            View complete lifespans as horizontal lines showing birth to death
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
              href="/timeline/events"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Switch to Events View
            </Link>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

            {/* Stats */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Statistics
              </label>
              <div className="text-sm text-gray-600 space-y-1">
                <div>Total People: {lifespanLines.length}</div>
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
              <span>View complete lifespans as horizontal lines</span>
              <span>Click on lines for details</span>
            </div>
          </div>

          {/* Lifespans View */}
          <div className="relative overflow-x-auto">
            {/* Year markers */}
            <div className="flex mb-4 border-b border-gray-300 pb-2">
              {Array.from({ length: Math.ceil((endYear - startYear) / 100) + 1 }, (_, i) => {
                const year = startYear + i * 100
                return (
                  <div key={year} className="flex-shrink-0 text-xs text-gray-500 font-medium" style={{ width: '100px' }}>
                    {formatYear(year)}
                  </div>
                )
              })}
            </div>

            {/* Lifespan lines */}
            <div className="relative" style={{ height: `${Math.max(lifespanLines.length * 60, 400)}px` }}>
              {lifespanLines.map((line, index) => {
                const startPercent = getLifespanPosition(line.startYear)
                const endPercent = getLifespanPosition(line.endYear)
                const width = endPercent - startPercent
                
                return (
                  <div
                    key={line.person.id}
                    className="absolute cursor-pointer group"
                    style={{
                      left: `${startPercent}%`,
                      top: `${line.yPosition}px`,
                      width: `${width}%`,
                      height: '40px'
                    }}
                    onClick={() => setSelectedPerson(line.person)}
                  >
                    {/* Lifespan line */}
                    <Link href={`/genealogy/${line.person.id}`} className="block w-full h-full">
                      <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-medium text-sm group-hover:shadow-lg transition-all duration-200 hover:from-blue-600 hover:to-purple-700">
                        {line.person.name}
                      </div>
                    </Link>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {line.person.name}: {formatYear(line.startYear)} - {formatYear(line.endYear)}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Empty state */}
          {lifespanLines.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Lifespans Found</h3>
              <p className="text-gray-600">
                Try adjusting the year range to see more people.
              </p>
            </div>
          )}
        </div>

        {/* Selected Person Details */}
        {selectedPerson && (
          <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-gray-900">{selectedPerson.name}</h2>
              <button
                onClick={() => setSelectedPerson(null)}
                className="text-gray-400 hover:text-gray-600 text-xl"
              >
                ✕
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Timeline</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Birth:</span>
                    <span className="font-medium">{formatYear(selectedPerson.birthYear)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Death:</span>
                    <span className="font-medium">{formatYear(selectedPerson.deathYear)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lifespan:</span>
                    <span className="font-medium">{selectedPerson.deathYear - selectedPerson.birthYear} years</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Family</h3>
                <div className="space-y-2">
                  {selectedPerson.fatherId && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Father:</span>
                      <Link 
                        href={`/genealogy/${selectedPerson.fatherId}`}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        {genealogyData.find(p => p.id === selectedPerson.fatherId)?.name}
                      </Link>
                    </div>
                  )}
                  {selectedPerson.motherId && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Mother:</span>
                      <Link 
                        href={`/genealogy/${selectedPerson.motherId}`}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        {genealogyData.find(p => p.id === selectedPerson.motherId)?.name}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Information</h3>
              <p className="text-gray-700 leading-relaxed">{selectedPerson.generalInfo}</p>
            </div>
            
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Biblical References</h3>
              <p className="text-gray-700">{selectedPerson.biblicalReferences}</p>
            </div>
            
            <div className="mt-6">
              <Link
                href={`/genealogy/${selectedPerson.id}`}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                View Full Profile →
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

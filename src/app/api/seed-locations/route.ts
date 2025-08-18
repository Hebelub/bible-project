import { NextResponse } from 'next/server'
import { db } from '~/server/db'
import { locations } from '~/server/db/schema'
import { locationData } from '~/data/locations'

export async function POST() {
  try {
    console.log('🌱 Seeding locations...')
    
    // Insert all locations
    for (const location of locationData) {
      await db.insert(locations).values({
        id: location.id,
        name: location.name,
        startYear: location.startYear,
        endYear: location.endYear,
        generalInfo: location.generalInfo,
        biblicalReferences: location.biblicalReferences,
        importantEvents: location.importantEvents,
        coordinates: location.coordinates,
        emoji: location.emoji,
        locationType: location.locationType,
      })
      console.log(`✅ Inserted: ${location.name}`)
    }
    
    console.log('🎉 All locations seeded successfully!')
    
    return NextResponse.json({ 
      success: true, 
      message: `Successfully seeded ${locationData.length} locations` 
    })
  } catch (error) {
    console.error('❌ Error seeding locations:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to seed locations' },
      { status: 500 }
    )
  }
}

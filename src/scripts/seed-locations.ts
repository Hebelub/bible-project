// Set up environment variables for the script
process.env.DATABASE_URL = "file:./db.sqlite"

import { db } from '~/server/db'
import { locations } from '~/server/db/schema'
import { locationData } from '~/data/locations'

async function seedLocations() {
  console.log('🌱 Seeding locations...')
  
  try {
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
  } catch (error) {
    console.error('❌ Error seeding locations:', error)
  }
}

// Run the seed function
seedLocations()
  .then(() => {
    console.log('✅ Seeding completed')
    process.exit(0)
  })
  .catch((error) => {
    console.error('❌ Seeding failed:', error)
    process.exit(1)
  })

import { sql } from "drizzle-orm";
import { index, sqliteTableCreator } from "drizzle-orm/sqlite-core";

/**
 * Multi-project schema feature of Drizzle ORM
 */
export const createTable = sqliteTableCreator(
  (name) => `bible-project_${name}`,
);

/**
 * Biblical figures/persons table
 */
export const persons = createTable(
  "person",
  (d) => ({
    id: d.integer({ mode: "number" }).primaryKey({ autoIncrement: true }),
    name: d.text({ length: 256 }).notNull(),
    fatherId: d.integer({ mode: "number" }),
    motherId: d.integer({ mode: "number" }),
    birthYear: d.integer({ mode: "number" }),
    deathYear: d.integer({ mode: "number" }),
    birthDate: d.text({ length: 100 }), // More flexible date format
    deathDate: d.text({ length: 100 }),
    generalInfo: d.text(), // Detailed biographical information
    biblicalReferences: d.text(), // Bible verses mentioning this person
    createdAt: d
      .integer({ mode: "timestamp" })
      .default(sql`(unixepoch())`)
      .notNull(),
    updatedAt: d.integer({ mode: "timestamp" }).$onUpdate(() => new Date()),
  }),
  (t) => [
    index("person_name_idx").on(t.name),
    index("father_idx").on(t.fatherId),
    index("mother_idx").on(t.motherId),
  ],
);

/**
 * Relationships table for marriages
 */
export const relationships = createTable(
  "relationship",
  (d) => ({
    id: d.integer({ mode: "number" }).primaryKey({ autoIncrement: true }),
    person1Id: d.integer({ mode: "number" }).notNull(),
    person2Id: d.integer({ mode: "number" }).notNull(),
    relationshipType: d.text({ length: 50 }).notNull(), // "marriage", "engagement", etc.
    startYear: d.integer({ mode: "number" }),
    endYear: d.integer({ mode: "number" }),
    notes: d.text(),
    createdAt: d
      .integer({ mode: "timestamp" })
      .default(sql`(unixepoch())`)
      .notNull(),
  }),
  (t) => [
    index("person1_idx").on(t.person1Id),
    index("person2_idx").on(t.person2Id),
  ],
);

/**
 * Biblical locations table
 */
export const locations = createTable(
  "location",
  (d) => ({
    id: d.integer({ mode: "number" }).primaryKey({ autoIncrement: true }),
    name: d.text({ length: 256 }).notNull(),
    startYear: d.integer({ mode: "number" }),
    endYear: d.integer({ mode: "number" }),
    generalInfo: d.text(), // Detailed information about the location
    biblicalReferences: d.text(), // Bible verses mentioning this location
    importantEvents: d.text(), // Key events that happened at this location
    coordinates: d.text({ length: 100 }), // "latitude,longitude" format
    emoji: d.text({ length: 10 }), // Emoji to represent the location type
    locationType: d.text({ length: 50 }), // "city", "mountain", "lake", "desert", etc.
    createdAt: d
      .integer({ mode: "timestamp" })
      .default(sql`(unixepoch())`)
      .notNull(),
    updatedAt: d.integer({ mode: "timestamp" }).$onUpdate(() => new Date()),
  }),
  (t) => [
    index("location_name_idx").on(t.name),
    index("location_type_idx").on(t.locationType),
  ],
);

/**
 * Legacy posts table (keeping for compatibility)
 */
export const posts = createTable(
  "post",
  (d) => ({
    id: d.integer({ mode: "number" }).primaryKey({ autoIncrement: true }),
    name: d.text({ length: 256 }),
    createdAt: d
      .integer({ mode: "timestamp" })
      .default(sql`(unixepoch())`)
      .notNull(),
    updatedAt: d.integer({ mode: "timestamp" }).$onUpdate(() => new Date()),
  }),
  (t) => [index("post_name_idx").on(t.name)],
);

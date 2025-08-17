import Link from 'next/link'
import { notFound } from 'next/navigation'
import { genealogyData, findChildren, findSpouses, findParents, findSiblings } from '~/data/genealogy'

// Use the comprehensive genealogy data from the separate file
const sampleData = genealogyData;

// PersonLink component for clickable relationships
const PersonLink = ({ person, className = "" }: { person: { id: number; name: string }; className?: string }) => (
  <Link 
    href={`/genealogy/${person.id}`}
    className={`text-blue-600 hover:text-blue-800 hover:underline transition-colors ${className}`}
  >
    {person.name}
  </Link>
);

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PersonPage({ params }: PageProps) {
  const { id } = await params;
  const personId = parseInt(id);
  const person = sampleData.find(p => p.id === personId);

  if (!person) {
    notFound();
  }

  const children = findChildren(person.id);
  const spouses = findSpouses(person.id);
  const { father, mother } = findParents(person.id);
  const siblings = findSiblings(person.id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        {/* Navigation */}
        <div className="flex justify-center mb-12">
          <Link 
            href="/genealogy"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold mr-8"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Genealogy
          </Link>
          <Link 
            href="/"
            className="text-blue-600 hover:text-blue-800 font-semibold mr-8"
          >
            Home
          </Link>
          <Link 
            href="/about"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            About
          </Link>
        </div>

        {/* Person Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8">
            {/* Person Header */}
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">👤</div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">{person.name}</h1>
              <div className="text-xl text-gray-500">
                {person.birthDate} - {person.deathDate}
              </div>
            </div>

            {/* Family Relationships Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Parents */}
                {(father ?? mother) && (
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Parents</h3>
                    <div className="space-y-3">
                      {father && (
                        <div className="flex items-center">
                          <span className="text-lg mr-3">👨</span>
                          <div>
                            <span className="font-medium text-gray-700">Father: </span>
                            <PersonLink person={father} className="text-lg" />
                          </div>
                        </div>
                      )}
                      {mother && (
                        <div className="flex items-center">
                          <span className="text-lg mr-3">👩</span>
                          <div>
                            <span className="font-medium text-gray-700">Mother: </span>
                            <PersonLink person={mother} className="text-lg" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Siblings */}
                {siblings.length > 0 && (
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Siblings ({siblings.length})
                    </h3>
                    <div className="space-y-2">
                      {siblings.map((sibling) => (
                        <div key={sibling.id} className="flex items-center">
                          <span className="text-lg mr-3">👥</span>
                          <PersonLink person={sibling} className="text-lg" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Spouses */}
                {spouses.length > 0 && (
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {spouses.length === 1 ? 'Spouse' : 'Spouses'} ({spouses.length})
                    </h3>
                    <div className="space-y-2">
                      {spouses.map((spouse) => (
                        <div key={spouse.id} className="flex items-center">
                          <span className="text-lg mr-3">💕</span>
                          <PersonLink person={spouse} className="text-lg" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Children */}
                {children.length > 0 && (
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Children ({children.length})
                    </h3>
                    <div className="space-y-2">
                      {children.map((child) => (
                        <div key={child.id} className="flex items-center">
                          <span className="text-lg mr-3">👶</span>
                          <PersonLink person={child} className="text-lg" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* General Information */}
            <div className="bg-blue-50 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">About {person.name}</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {person.generalInfo}
              </p>
            </div>

            {/* Biblical References */}
            <div className="bg-yellow-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Biblical References</h3>
              <p className="text-lg text-gray-700">
                {person.biblicalReferences}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from 'next/link'
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

export default function GenealogyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Genealogy Explorer
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the family trees and relationships of biblical figures. Discover connections, 
            marriages, and the rich history of God&apos;s chosen people.
          </p>
          <p className="text-lg text-gray-500 mt-4">
            Currently showing {sampleData.length} biblical figures across multiple generations
          </p>
          <p className="text-sm text-gray-400 mt-2">
            💡 Click on any card or relationship to explore individual details
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mb-12">
          <Link 
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold mr-8"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <Link 
            href="/about"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            About Project
          </Link>
        </div>

        {/* People Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleData.map((person) => {
            const children = findChildren(person.id);
            const spouses = findSpouses(person.id);
            const { father, mother } = findParents(person.id);
            const siblings = findSiblings(person.id);
            
            return (
              <Link 
                key={person.id} 
                href={`/genealogy/${person.id}`}
                className="block"
              >
                <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-transparent hover:border-blue-200">
                  {/* Person Header */}
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-3">👤</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{person.name}</h3>
                    <div className="text-sm text-gray-500">
                      {person.birthDate} - {person.deathDate}
                    </div>
                  </div>

                  {/* Parents */}
                  {(father ?? mother) && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Parents:</h4>
                      <div className="space-y-1">
                        {father && (
                          <div className="text-sm text-gray-600">
                            <span className="font-medium">Father:</span> {father.name}
                          </div>
                        )}
                        {mother && (
                          <div className="text-sm text-gray-600">
                            <span className="font-medium">Mother:</span> {mother.name}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Siblings */}
                  {siblings.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Siblings ({siblings.length}):
                      </h4>
                      <div className="space-y-1">
                        {siblings.slice(0, 3).map((sibling) => (
                          <div key={sibling.id} className="text-sm text-gray-600">
                            👥 {sibling.name}
                          </div>
                        ))}
                        {siblings.length > 3 && (
                          <div className="text-sm text-gray-500">
                            +{siblings.length - 3} more...
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Spouses */}
                  {spouses.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {spouses.length === 1 ? 'Spouse:' : 'Spouses:'}
                      </h4>
                      <div className="space-y-1">
                        {spouses.map((spouse) => (
                          <div key={spouse.id} className="text-sm text-gray-600">
                            💕 {spouse.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Children */}
                  {children.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Children ({children.length}):
                      </h4>
                      <div className="space-y-1">
                        {children.slice(0, 4).map((child) => (
                          <div key={child.id} className="text-sm text-gray-600">
                            👶 {child.name}
                          </div>
                        ))}
                        {children.length > 4 && (
                          <div className="text-sm text-gray-500">
                            +{children.length - 4} more...
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* General Information */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">About:</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {person.generalInfo}
                    </p>
                  </div>

                  {/* Biblical References */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Biblical References:</h4>
                    <p className="text-sm text-gray-500">
                      {person.biblicalReferences}
                    </p>
                  </div>

                  {/* Click indicator */}
                  <div className="text-center mt-4 pt-4 border-t border-gray-100">
                    <div className="text-xs text-blue-500 font-medium">
                      Click to view details →
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-gray-600">
            This comprehensive genealogy includes all 12 sons of Israel, multiple generations, 
            and demonstrates the rich family connections throughout biblical history.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Navigate through the family tree by clicking on any person or relationship
          </p>
        </div>
      </div>
    </div>
  );
}

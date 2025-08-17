'use client'

import Link from 'next/link'
import { type BiblicalReferenceItem, formatBiblicalReference, createBibleLink } from '~/lib/biblical-references'

interface BiblicalReferencesProps {
  references: BiblicalReferenceItem[]
  className?: string
}

export default function BiblicalReferences({ references, className = '' }: BiblicalReferencesProps) {
  if (!references || references.length === 0) {
    return null
  }

  return (
    <div className={`text-sm text-gray-600 ${className}`}>
      <span className="font-medium text-gray-700">Biblical References: </span>
      {references.map((ref, index) => (
        <span key={index}>
          <Link 
            href={createBibleLink(ref)}
            className="text-blue-600 hover:text-blue-800 hover:underline"
          >
            {formatBiblicalReference(ref)}
          </Link>
          {index < references.length - 1 ? ', ' : ''}
        </span>
      ))}
    </div>
  )
}

import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About Bible Project
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            An open-source initiative to make the Bible more accessible, interactive, and knowledge-rich through modern technology.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Our Mission
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-4">
                We believe that the Bible contains timeless wisdom that should be accessible to everyone. 
                Our project transforms traditional Bible reading into an interactive, knowledge-rich experience 
                that helps users gain deeper understanding of specific topics, events, and symbolism.
              </p>
              <p className="text-lg text-gray-700">
                By combining modern web technologies with comprehensive biblical knowledge, we&apos;re creating 
                a platform that makes studying the Bible engaging, educational, and spiritually enriching.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-8 text-white text-center">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-xl font-semibold mb-2">Interactive Learning</h3>
              <p className="text-blue-100">
                Discover connections and insights that traditional reading might miss
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🕐</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Timeline of Events</h3>
            <p className="text-gray-600">
              Explore biblical events chronologically with historical context and background information.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Genealogy Explorer</h3>
            <p className="text-gray-600">
              Navigate family trees and relationships with interactive connections and historical context.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Topic Explorer</h3>
            <p className="text-gray-600">
              Deep dive into specific themes, concepts, and symbolism with cross-referenced studies.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Interactive Reading</h3>
            <p className="text-gray-600">
              Enhanced Bible reading with contextual information and cross-references.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Knowledge Database</h3>
            <p className="text-gray-600">
              Comprehensive biblical knowledge base that&apos;s easy to navigate and contribute to.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Open Source</h3>
            <p className="text-gray-600">
              Community-driven development with contributions from scholars and developers worldwide.
            </p>
          </div>
        </div>

        {/* Technology Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Built with Modern Technology
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="text-3xl mb-2">⚛️</div>
              <h4 className="font-semibold text-gray-900">Next.js 15</h4>
              <p className="text-sm text-gray-600">Modern React framework</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl mb-2">🔷</div>
              <h4 className="font-semibold text-gray-900">TypeScript</h4>
              <p className="text-sm text-gray-600">Type-safe development</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl mb-2">🎨</div>
              <h4 className="font-semibold text-gray-900">Tailwind CSS</h4>
              <p className="text-sm text-gray-600">Utility-first styling</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl mb-2">🗄️</div>
              <h4 className="font-semibold text-gray-900">Drizzle ORM</h4>
              <p className="text-sm text-gray-600">Type-safe database</p>
            </div>
          </div>
        </div>

        {/* Get Involved Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
          <p className="text-xl mb-6 text-blue-100">
            This is a community-driven project. We welcome contributions from developers, 
            scholars, and anyone passionate about making the Bible more accessible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore the Project
            </Link>
            <a 
              href="https://github.com/hebelub/bible-project" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contribute on GitHub
            </a>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link 
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

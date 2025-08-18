import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="text-3xl">📖</div>
              <span className="text-xl font-bold text-gray-900">Bible Project</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
                About
              </Link>
              <Link href="/genealogy" className="text-gray-700 hover:text-blue-600 font-medium">
                Genealogy
              </Link>
              <Link href="/bible" className="text-gray-700 hover:text-blue-600 font-medium">
                Bible
              </Link>
              <Link href="/timeline" className="text-gray-700 hover:text-blue-600 font-medium">
                Timeline
              </Link>
              <Link href="/locations" className="text-gray-700 hover:text-blue-600 font-medium">
                Locations
              </Link>
              <a href="https://github.com/hebelub/bible-project" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-gray-700 hover:text-blue-600 font-medium">
                GitHub
              </a>
            </div>
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
            Interactive Bible
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Study Platform
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover the Bible like never before with our interactive platform. 
            Explore timelines, genealogies, and deep dive into topics with modern technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/about"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all"
            >
              Learn More
            </Link>
            <a 
              href="https://github.com/hebelub/bible-project" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-gray-900 border-2 border-gray-300 px-8 py-4 rounded-lg font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
          Powerful Features for Bible Study
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
            <div className="text-5xl mb-6">🕐</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Timeline of Events</h3>
            <p className="text-gray-600 mb-6">
              Navigate through biblical history with our interactive timeline. 
              See events in chronological order with rich historical context.
            </p>
            <Link href="/timeline" className="text-blue-600 font-semibold hover:text-blue-800">
              Explore Timeline →
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
            <div className="text-5xl mb-6">👥</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Genealogy Explorer</h3>
            <p className="text-gray-600 mb-6">
              Explore family trees and relationships between biblical figures. 
              Understand connections that span generations.
            </p>
            <Link href="/genealogy" className="text-blue-600 font-semibold hover:text-blue-800">
              Explore Genealogy →
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
            <div className="text-5xl mb-6">🗺️</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Biblical Locations</h3>
            <p className="text-gray-600 mb-6">
              Explore cities, mountains, rivers, and regions mentioned in the Bible. 
              Discover the geographical context of biblical events.
            </p>
            <Link href="/locations" className="text-blue-600 font-semibold hover:text-blue-800">
              Explore Locations →
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
            <div className="text-5xl mb-6">📚</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Bible Reader</h3>
            <p className="text-gray-600 mb-6">
              Read the Bible with multiple translations, search functionality,
              and easy navigation between books and chapters.
            </p>
            <Link href="/bible" className="text-blue-600 font-semibold hover:text-blue-700">
              Read Now →
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
            <div className="text-5xl mb-6">📊</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Knowledge Database</h3>
            <p className="text-gray-600 mb-6">
              Comprehensive biblical knowledge base that&apos;s easy to navigate 
              and contribute to. Community-driven content.
            </p>
            <div className="text-blue-600 font-semibold">Coming Soon →</div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
            <div className="text-5xl mb-6">🌐</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Open Source</h3>
            <p className="text-gray-600 mb-6">
              Built by the community, for the community. 
              Contribute, learn, and grow together.
            </p>
            <div className="text-blue-600 font-semibold">Active Development →</div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Built with Modern Technology
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚛️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Next.js 15</h3>
              <p className="text-gray-600">Modern React framework with App Router</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔷</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">TypeScript</h3>
              <p className="text-gray-600">Type-safe development experience</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tailwind CSS</h3>
              <p className="text-gray-600">Utility-first CSS framework</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🗄️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Drizzle ORM</h3>
              <p className="text-gray-600">Type-safe database operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Explore?
          </h2>
                      <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join us in making the Bible more accessible and engaging. 
              Whether you&apos;re a developer, scholar, or simply passionate about biblical knowledge, 
              there&apos;s a place for you in our community.
            </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/about"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Learn More About Us
            </Link>
            <a 
              href="https://github.com/hebelub/bible-project" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contribute on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="text-2xl">📖</div>
            <span className="text-xl font-bold">Bible Project</span>
          </div>
          <p className="text-gray-400 mb-6">
            Making the Bible interactive, accessible, and knowledge-rich through modern technology.
          </p>
          <div className="flex justify-center space-x-6">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/genealogy" className="text-gray-400 hover:text-white transition-colors">
              Genealogy
            </Link>
            <Link href="/locations" className="text-gray-400 hover:text-white transition-colors">
              Locations
            </Link>
            <a href="https://github.com/hebelub/bible-project" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-gray-400 hover:text-white transition-colors">
              GitHub
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              © 2024 Bible Project. Open source and community-driven.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

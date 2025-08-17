# Bible Project 📖

An open-source, interactive Bible study platform designed to make biblical knowledge accessible and engaging through modern web technologies.

## 🌟 Project Vision

This project aims to transform traditional Bible reading into an interactive, knowledge-rich experience. Our goal is to help users gain deeper understanding of specific topics, events, and symbolism found throughout the Bible through innovative digital tools and comprehensive resources.

## ✨ Key Features

### 📚 Interactive Bible Reading
- Enhanced reading experience with contextual information
- Cross-references and related passages
- Search and filter capabilities

### 🕐 Timeline of Events
- Chronological view of biblical events
- Historical context and background information
- Interactive timeline navigation

### 👥 Genealogy Explorer
- Family trees and relationships
- Interactive family connections
- Historical context for biblical figures

### 🔍 Topic Explorer
- Deep dives into specific themes and concepts
- Symbolism and allegory explanations
- Cross-referenced topic studies

### 📊 Knowledge Database
- Comprehensive biblical knowledge base
- Easy-to-navigate topic organization
- Contributable and expandable content

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: SQLite (LibSQL) with Drizzle ORM
- **API**: tRPC for type-safe API calls
- **Package Manager**: PNPM

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- PNPM (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd bible-project
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Set up the database**
   ```bash
   pnpm db:generate
   pnpm db:push
   ```

5. **Start the development server**
   ```bash
   pnpm dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
bible-project/
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── server/              # Backend API and database
│   │   ├── api/            # tRPC API routes
│   │   └── db/             # Database schema and connection
│   ├── trpc/                # tRPC client configuration
│   └── styles/              # Global styles
├── public/                  # Static assets
└── drizzle.config.ts        # Database configuration
```

## 🗄️ Database Commands

- `pnpm db:generate` - Generate database migrations
- `pnpm db:push` - Push schema changes to database
- `pnpm db:migrate` - Run database migrations
- `pnpm db:studio` - Open Drizzle Studio for database management

## 🧪 Development Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm lint` - Run ESLint
- `pnpm format:write` - Format code with Prettier
- `pnpm typecheck` - Run TypeScript type checking

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes**
4. **Commit your changes** (`git commit -m 'Add amazing feature'`)
5. **Push to the branch** (`git push origin feature/amazing-feature`)
6. **Open a Pull Request**

### Contribution Areas
- Content creation and curation
- Feature development
- Bug fixes and improvements
- Documentation updates
- UI/UX enhancements

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- The open-source community for the amazing tools and libraries
- Biblical scholars and researchers whose work inspires this project
- Contributors and supporters of this project

## �� Contact & Support

- **Issues**: [GitHub Issues](<your-repo-url>/issues)
- **Discussions**: [GitHub Discussions](<your-repo-url>/discussions)
- **Contributing**: See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines

---

**Let's make the Bible more accessible and engaging together!** 🙌

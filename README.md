# 💬 nb-lab0-chatapp

> A modern real-time chat application built with Next.js 15, React 19, Socket.io, and tRPC.

![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-blue?style=flat-square&logo=react)
![Socket.io](https://img.shields.io/badge/Socket.io-4.8.1-white?style=flat-square&logo=socket.io)
![Prisma](https://img.shields.io/badge/Prisma-6.5.0-2D3748?style=flat-square&logo=prisma)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0.0-38B2AC?style=flat-square&logo=tailwind-css)

## ✨ Features

- 🚀 **Real-time messaging** powered by Socket.io
- 🔒 **Type-safe API** with tRPC for end-to-end type safety
- 💾 **Database integration** with Prisma ORM
- 🎨 **Sleek UI** built with TailwindCSS 4
- 📝 **Full TypeScript support** for a robust development experience

## 🛠️ Tech Stack

- 🖥️ **Frontend**: Next.js 15.2.4, React 19
- 🔌 **Backend**: Next.js API routes, Socket.io server
- 🔄 **API Layer**: tRPC for type-safe APIs
- 🗄️ **Database**: Prisma ORM with PostgreSQL
- 💅 **Styling**: TailwindCSS 4
- 🔍 **Type Safety**: TypeScript, Zod
- ⚡ **Development**: Turbopack for lightning-fast builds

## 📋 Prerequisites

- Node.js 20+
- pnpm
- PostgreSQL database

## 🚀 Getting Started

### 📥 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/nb-lab0-chatapp.git
cd nb-lab0-chatapp
```

2. Install dependencies:

```bash
pnpm install
```

### ⚙️ Environment Configuration

Create a `.env` file in the root directory:

```
# -----------------------------------------------------------------------------
# 🌐 App
# -----------------------------------------------------------------------------
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# -----------------------------------------------------------------------------
# 🗄️ Database (PostgreSQL)
# -----------------------------------------------------------------------------
DATABASE_URL="postgresql://username:password@localhost:5432/chatapp"
```

#### 🔑 Environment Variables:

- `NEXT_PUBLIC_BASE_URL`: Your app's base URL (for API calls and Socket.io)
- `DATABASE_URL`: Your PostgreSQL connection string

#### ⚙️ Prisma Setup:

```bash
# Generate Prisma client
pnpm run generate

# Push schema to database
pnpm run push
```

### 🏃‍♂️ Running the Application

#### 💻 Development Mode
```bash
pnpm run dev-server
```

## 📜 Important Scripts

- `npm run dev-server` - 🔌 Run Socket.io server with Next.js
- `npm run push` - 📤 Push Prisma schema to database
- `npm run generate` - ⚙️ Generate Prisma client

## 📁 Project Structure

```
nb-lab0-chatapp/
├── app/                  # 📱 Next.js App Router
├── components/           # 🧩 React components
├── lib/                  # 🛠️ Utility functions
├── prisma/               # 🗄️ Prisma schema and migrations
├── public/               # 🖼️ Static assets
├── server/               # 🔌 tRPC and Socket.io server code
├── styles/               # 💅 Global styles
├── types/                # 📝 TypeScript type definitions
├── .env                  # 🔐 Environment variables
├── next.config.js        # ⚙️ Next.js configuration
├── package.json          # 📦 Project dependencies
├── server.js             # 🚀 Socket.io server entry
├── tailwind.config.js    # 🎨 TailwindCSS configuration
└── tsconfig.json         # 📋 TypeScript configuration
```
---
Made with 👨🏻‍💻 by [niklas.sh](https://niklas.sh)
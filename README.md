# 🌸 SuuSri — AI Healthcare Assistant

> A multilingual, voice-enabled AI health companion built with React, Groq LLM, Firebase, and PWA support — designed to make healthcare guidance accessible in Odia, Hindi, and English.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
  - [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

**SuuSri** (from *Suusri*, a respectful/affectionate address) is a full-stack AI healthcare assistant that provides health guidance in a conversational, voice-enabled interface. It leverages Groq's ultra-fast Llama inference to respond in natural Odia, Hindi, and English, making healthcare information more accessible to regional users in India.

The app is built as a Progressive Web App (PWA), so users can install it on their devices for an app-like experience without visiting an app store.

---

## Features

- 🤖 **AI Chat (Groq + Llama 3.1)** — Real-time conversational health assistant powered by `llama-3.1-8b-instant`
- 🗣️ **Voice Input & Output** — Speak your query; receive spoken responses using the Web Speech API (Hindi/English support)
- 🌐 **Multilingual Support** — Responds naturally in Odia, Hinglish, and English
- 😊 **Emoji Picker** — Rich chat UI with inline emoji support
- 🔐 **Firebase Authentication** — Google Sign-In with persistent sessions and Firestore user profiles
- 💳 **Credits System** — Per-user query credit tracking stored in Firestore
- 📦 **PWA Installable** — Install-to-home-screen prompt with custom service worker
- ⚡ **Code Splitting** — Lazy-loaded routes for fast initial load
- 🛡️ **Error Boundary** — Graceful UI fallback on runtime errors
- 💬 **Chat History Persistence** — Messages saved to `localStorage` across sessions
- 🎨 **Animated Splash Screen** — Particle-based animated intro (`/suusri` route)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite 7, Tailwind CSS 4, Bootstrap 5 |
| AI / LLM | Groq SDK (`llama-3.1-8b-instant`), Google Generative AI |
| Voice | Web Speech API, ElevenLabs JS SDK, LiveKit |
| Auth & DB | Firebase Auth (Google OAuth), Firestore |
| Routing | React Router DOM v7 |
| Animation | Framer Motion |
| Realtime | Socket.IO Client |
| PWA | Custom Service Worker (`public/sw.js`) |
| Deployment | Firebase Hosting (frontend), Render/Railway (backend) |

---

## Project Structure

```
suusri-health-care-ai-assistant/
├── public/
│   ├── index.html          # HTML entry point
│   ├── manifest.json       # PWA manifest
│   ├── sw.js               # Service worker
│   ├── suu-icon.png        # App icon
│   └── suu4.png            # Splash asset
│
├── src/
│   ├── App.jsx             # Root component with route definitions
│   ├── App.css
│   ├── index.jsx           # React DOM entry
│   ├── index.css
│   │
│   ├── Assets/
│   │   └── img/            # App images & avatars
│   │       ├── chat_bg.png
│   │       ├── suu1–4.png
│   │       └── suulogo.png
│   │
│   ├── components/
│   │   ├── Main.jsx        # Landing/home component
│   │   ├── Main.css
│   │   ├── Welcome.jsx     # PWA install prompt + layout wrapper
│   │   ├── Welcome.css
│   │   ├── Navbar.jsx      # Top navigation bar
│   │   ├── Footer.jsx      # Footer component
│   │   ├── Footer.css
│   │   ├── LoadingSkeleton.jsx  # Loading state UI
│   │   │
│   │   ├── Main/
│   │   │   ├── Chat.jsx        # Core AI chat interface (voice + text)
│   │   │   ├── SuuSri.module.css
│   │   │   ├── suusri.jsx      # Animated splash/intro screen
│   │   │   └── suusri.css
│   │   │
│   │   └── Profile/
│   │       ├── Profile.jsx     # User profile & credits dashboard
│   │       └── Profile.css
│   │
│   └── lib/
│       ├── AuthContext.jsx     # Firebase auth provider & context
│       ├── firebase.js         # Firebase app initialization
│       ├── ErrorBoundary.jsx   # React error boundary wrapper
│       └── usePWAInstall.js    # PWA install prompt hook
│
├── .env.example            # Environment variable template
├── firebase.json           # Firebase Hosting config
├── package.json
├── tailwind.config.js
├── vite.config.js
└── TODO.md
```

### Routes

| Path | Component | Description |
|---|---|---|
| `/` | `Welcome` | Landing page with PWA install prompt |
| `/main` | `Main` | Main dashboard |
| `/chat` | `Chat` | AI chat interface (voice + text) |
| `/suusri` | `SuuSri` | Animated splash/intro screen |
| `/profile` | `Profile` | User profile & credits |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- A free [Groq API key](https://console.groq.com/keys)
- A Firebase project with **Authentication** (Google provider) and **Firestore** enabled

---

### Frontend Setup

```bash
# 1. Clone the repository
git clone https://github.com/SubhamKhandual007/suusri-health-care-ai-assistant.git
cd suusri-health-care-ai-assistant

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Fill in the values (see Environment Variables section below)

# 4. Start the development server
npm run dev
# App runs at http://localhost:5173
```

---

### Backend Setup

> The project references a FastAPI + Socket.IO backend for voice streaming. If you're running voice mode locally, follow these steps.

```bash
# 1. Create and activate a virtual environment
python -m venv backend_env

# Windows
backend_env\Scripts\activate
# macOS / Linux
source backend_env/bin/activate

# 2. Install Python dependencies
pip install -r requirements.txt

# Fix PyAudio on Windows if needed:
pip install pipwin && pipwin install pyaudio

# 3. Start the backend server
uvicorn app:socket_app --host 0.0.0.0 --port 8005 --reload
# Runs at http://localhost:8005
```

---

### Environment Variables

Copy `.env.example` to `.env` and fill in your values:

```env
# Required — get a free key at https://console.groq.com/keys
VITE_GROQ_API_KEY=your_groq_api_key_here

# Optional — override the default model
MODEL_ID=llama-3.1-8b-instant

# Firebase config (from your Firebase project settings)
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

> **Note:** All frontend env variables must be prefixed with `VITE_` to be exposed by Vite.

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite development server |
| `npm run build` | Build for production (output: `dist/`) |
| `npm run preview` | Preview the production build locally |
| `uvicorn app:socket_app --reload` | Start the FastAPI backend server |

---

## Deployment

### Frontend → Firebase Hosting

```bash
# Build the app
npm run build

# Deploy to Firebase
firebase deploy
```

Make sure `firebase.json` is configured to point to the `dist/` directory.

### Backend → Render / Railway

1. Push your backend code to a GitHub repository.
2. Create a new **Web Service** on [Render](https://render.com) or [Railway](https://railway.app).
3. Set the start command to:
   ```
   uvicorn app:socket_app --host 0.0.0.0 --port 8005
   ```
4. Add your `GROQ_API_KEY` as an environment variable in the dashboard.

---

## Roadmap

- [x] Core AI chat with Groq Llama
- [x] Voice input (Web Speech API)
- [x] Firebase Auth + Firestore user profiles
- [x] PWA installable
- [x] Multilingual responses (Odia / Hindi / English)
- [ ] Voice output via ElevenLabs (in progress)
- [ ] LiveKit-based real-time voice calls
- [ ] Backend Groq API key validation fix
- [ ] Full backend sync with user credits
- [ ] Dark/Light theme toggle
- [ ] Chat history export

---

## Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## ⚠️ Medical Disclaimer

SuuSri provides general health information and guidance only. It is **not a substitute for professional medical advice, diagnosis, or treatment**. Always consult a qualified healthcare provider for any medical concerns. In case of emergency, contact your local emergency services immediately.

---

## License

This project is private. All rights reserved © Subham Khandual.

---

<p align="center">Made with ❤️ for accessible healthcare in India</p>

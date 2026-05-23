# SuuSri - Fullstack AI Chat App (React + FastAPI + Groq + Firebase)

## Quick Start (Development)

### Backend (FastAPI + SocketIO + Groq AI)
1. Create Python venv: `python -m venv backend_env`
2. Activate: `backend_env\\Scripts\\activate` (Windows)
3. Install deps: `pip install -r requirements.txt`
4. Copy `.env.example` → `.env`, add `GROQ_API_KEY` (free at https://console.groq.com/keys)
5. pyaudio fix (if error): `pip install pipwin && pipwin install pyaudio`
6. Start server: `python app.py`
   - Runs on http://localhost:8005
   - Test: `curl http://localhost:8005`

### Frontend (React + Vite + Tailwind)
1. `npm install`
2. `npm run dev`
   - Runs on http://localhost:5173 (auto-proxies API to backend)

## Features
- Real-time chat with Groq Llama AI (Odia/English/Hinglish)
- Voice mode (microphone/speaker via SocketIO)
- Firebase Auth + realtime
- PWA installable

## Production Deploy
- Frontend: `npm run build` → Firebase Hosting (`firebase deploy`)
- Backend: Render/Railway (Docker with requirements.txt)

## Scripts
| Command | Description |
|---------|-------------|
| `npm run dev` | Frontend dev server |
| `python app.py` | Backend API + WS |
| `npm run build` | Frontend production build |

---
**Original CRA docs below for reference...**


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

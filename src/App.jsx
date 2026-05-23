import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './lib/AuthContext';
import ErrorBoundary from './lib/ErrorBoundary';
import LoadingSkeleton from './components/LoadingSkeleton';
import './App.css';

// Lazy load components for better performance (code splitting)
const Main = lazy(() => import('./components/Main'));
const Chat = lazy(() => import('./components/Main/Chat'));
const Welcome = lazy(() => import('./components/Welcome'));
const SuuSri = lazy(() => import('./components/Main/suusri'));
const Profile = lazy(() => import('./components/Profile/Profile'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-900">
    <LoadingSkeleton type="welcome" />
  </div>
);

const App = () => {
  return (
    <ErrorBoundary showDetails={process.env.NODE_ENV === 'development'}>
      <AuthProvider>
        <Router>
          <div className="App">
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/main" element={<Main />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/suusri" element={<SuuSri />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </Suspense>
          </div>
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  );
};

export default App;

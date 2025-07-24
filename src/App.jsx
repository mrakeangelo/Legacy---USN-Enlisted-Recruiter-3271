import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import ImpactWall from './components/ImpactWall';
import StoryBlock from './components/StoryBlock';
import MessageWall from './components/MessageWall';
import Recognition from './components/Recognition';
import PersonalSide from './components/PersonalSide';
import TimeCapsule from './components/TimeCapsule';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Simulate loading time
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className={`${darkMode ? 'dark' : ''}`}>
        <div className="min-h-screen bg-gray-50 dark:bg-navy-900 transition-colors duration-300">
          <Routes>
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/" element={
              <MainSite darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function MainSite({ darkMode, toggleDarkMode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <Timeline />
      <Gallery />
      <ImpactWall />
      <StoryBlock />
      <MessageWall />
      <Recognition />
      <PersonalSide />
      <TimeCapsule />
      <Footer />
    </motion.div>
  );
}

export default App;
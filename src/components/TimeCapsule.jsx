import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiClock, FiLock, FiUnlock, FiCalendar, FiHeart, FiMail, FiStar } = FiIcons;

const TimeCapsule = () => {
  const [selectedCapsule, setSelectedCapsule] = useState(null);

  const timeCapsules = [
    {
      id: 1,
      title: "To My Future Self",
      recipient: "PO1 Alvarez (2029)",
      unlockDate: "2029-01-01",
      isLocked: true,
      preview: "A reflection on my journey as a recruiter and dreams for the future...",
      icon: FiHeart,
      color: "bg-pink-100 dark:bg-pink-900",
      iconColor: "text-pink-600 dark:text-pink-400"
    },
    {
      id: 2,
      title: "For My Recruits",
      recipient: "Current & Future Sailors",
      unlockDate: "2025-12-31",
      isLocked: true,
      preview: "Words of wisdom and encouragement for those I've had the honor to guide...",
      icon: FiStar,
      color: "bg-blue-100 dark:bg-blue-900",
      iconColor: "text-blue-600 dark:text-blue-400"
    },
    {
      id: 3,
      title: "Navy Legacy Letter",
      recipient: "Future Navy Recruiters",
      unlockDate: "2030-07-04",
      isLocked: true,
      preview: "Lessons learned and traditions to carry forward in the recruiting mission...",
      icon: FiMail,
      color: "bg-navy-100 dark:bg-navy-800",
      iconColor: "text-navy-600 dark:text-navy-400"
    },
    {
      id: 4,
      title: "Family Memories",
      recipient: "My Loved Ones",
      unlockDate: "2027-05-15",
      isLocked: true,
      preview: "Capturing this moment in time and the love that sustains me...",
      icon: FiHeart,
      color: "bg-gold-100 dark:bg-gold-900",
      iconColor: "text-gold-600 dark:text-gold-400"
    }
  ];

  const openCapsule = (capsule) => {
    setSelectedCapsule(capsule);
  };

  const closeCapsule = () => {
    setSelectedCapsule(null);
  };

  const isUnlocked = (unlockDate) => {
    return new Date() >= new Date(unlockDate);
  };

  const getTimeUntilUnlock = (unlockDate) => {
    const now = new Date();
    const unlock = new Date(unlockDate);
    const diff = unlock - now;
    
    if (diff <= 0) return "Available now";
    
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    
    if (years > 0) return `${years} year${years > 1 ? 's' : ''} remaining`;
    if (months > 0) return `${months} month${months > 1 ? 's' : ''} remaining`;
    return `${days} day${days > 1 ? 's' : ''} remaining`;
  };

  return (
    <section id="timecapsule" className="py-20 bg-gradient-to-br from-navy-50 to-blush-50 dark:from-navy-800 dark:to-navy-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-navy-900 dark:text-white mb-4">
            Time Capsule
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Messages sealed in time, waiting for the perfect moment to be opened
          </p>
        </motion.div>

        {/* Time Capsules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {timeCapsules.map((capsule, index) => (
            <motion.div
              key={capsule.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`${capsule.color} p-6 rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl`}
              onClick={() => openCapsule(capsule)}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-full bg-white dark:bg-navy-700 ${capsule.iconColor}`}>
                  <SafeIcon icon={capsule.icon} className="w-6 h-6" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-xl font-playfair font-semibold text-navy-900 dark:text-white">
                      {capsule.title}
                    </h3>
                    <SafeIcon 
                      icon={isUnlocked(capsule.unlockDate) ? FiUnlock : FiLock} 
                      className={`w-4 h-4 ${isUnlocked(capsule.unlockDate) ? 'text-green-500' : 'text-gray-500'}`}
                    />
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    To: {capsule.recipient}
                  </p>
                  
                  <p className="text-gray-700 dark:text-gray-400 text-sm mb-3 italic">
                    {capsule.preview}
                  </p>
                  
                  <div className="flex items-center space-x-4 text-xs">
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiCalendar} className="w-3 h-3" />
                      <span className="text-gray-600 dark:text-gray-400">
                        {new Date(capsule.unlockDate).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiClock} className="w-3 h-3" />
                      <span className={`font-medium ${
                        isUnlocked(capsule.unlockDate) ? 'text-green-600' : 'text-orange-600'
                      }`}>
                        {getTimeUntilUnlock(capsule.unlockDate)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Create New Capsule */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-white dark:bg-navy-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-playfair font-bold text-navy-900 dark:text-white mb-4">
              Create Your Own Time Capsule
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Leave a message for the future - for yourself, your family, or future sailors
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-navy-600 hover:bg-navy-700 text-white px-8 py-3 rounded-full font-inter font-semibold transition-all duration-300 flex items-center space-x-2 mx-auto"
            >
              <SafeIcon icon={FiMail} className="w-5 h-5" />
              <span>Create Time Capsule</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedCapsule && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
              onClick={closeCapsule}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white dark:bg-navy-800 p-8 rounded-lg max-w-md w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <SafeIcon icon={selectedCapsule.icon} className={`w-8 h-8 ${selectedCapsule.iconColor}`} />
                  <h3 className="text-2xl font-playfair font-bold text-navy-900 dark:text-white">
                    {selectedCapsule.title}
                  </h3>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-sm font-inter font-medium text-gray-600 dark:text-gray-400">
                      To: {selectedCapsule.recipient}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm font-inter font-medium text-gray-600 dark:text-gray-400">
                      Unlock Date: {new Date(selectedCapsule.unlockDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm font-inter font-medium text-gray-600 dark:text-gray-400">
                      Status: {getTimeUntilUnlock(selectedCapsule.unlockDate)}
                    </span>
                  </div>
                </div>

                {isUnlocked(selectedCapsule.unlockDate) ? (
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-6">
                    <p className="text-green-800 dark:text-green-200 font-inter">
                      This message is now available to read!
                    </p>
                  </div>
                ) : (
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg mb-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <SafeIcon icon={FiLock} className="w-4 h-4 text-orange-600" />
                      <span className="text-orange-800 dark:text-orange-200 font-inter font-medium">
                        Sealed Until {new Date(selectedCapsule.unlockDate).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-orange-700 dark:text-orange-300 text-sm">
                      This message will be revealed when the time is right.
                    </p>
                  </div>
                )}

                <div className="flex justify-end">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={closeCapsule}
                    className="bg-navy-600 hover:bg-navy-700 text-white px-6 py-2 rounded-lg font-inter font-medium transition-colors"
                  >
                    Close
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TimeCapsule;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUser, FiLock, FiEye, FiEyeOff, FiLogIn, FiSettings, FiUsers, FiImage, FiAward, FiClock, FiMessageCircle } = FiIcons;

const AdminPanel = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock login - in real app, this would authenticate with Supabase
    if (credentials.email === 'admin@navy.mil' && credentials.password === 'admin123') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const adminTabs = [
    { id: 'dashboard', name: 'Dashboard', icon: FiSettings },
    { id: 'timeline', name: 'Timeline', icon: FiClock },
    { id: 'gallery', name: 'Gallery', icon: FiImage },
    { id: 'awards', name: 'Awards', icon: FiAward },
    { id: 'messages', name: 'Messages', icon: FiMessageCircle },
    { id: 'users', name: 'Users', icon: FiUsers }
  ];

  const mockStats = {
    totalMessages: 47,
    pendingMessages: 8,
    totalImages: 156,
    totalAwards: 5,
    totalVisitors: 1247
  };

  const mockPendingMessages = [
    { id: 1, name: 'John Smith', message: 'Thank you for your service...', date: '2024-01-15' },
    { id: 2, name: 'Sarah Johnson', message: 'You inspired me to join...', date: '2024-01-14' },
    { id: 3, name: 'Mike Wilson', message: 'Your leadership is amazing...', date: '2024-01-13' }
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-navy-900 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-navy-800 p-8 rounded-lg shadow-2xl max-w-md w-full"
        >
          <div className="text-center mb-8">
            <SafeIcon icon={FiUser} className="w-16 h-16 text-navy-600 mx-auto mb-4" />
            <h1 className="text-2xl font-playfair font-bold text-navy-900 dark:text-white">
              Admin Login
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Access the tribute management panel
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                value={credentials.email}
                onChange={(e) => setCredentials({...credentials, email: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 dark:border-navy-600 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent dark:bg-navy-700 dark:text-white"
                placeholder="admin@navy.mil"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={credentials.password}
                  onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                  className="w-full px-4 py-3 pr-12 border border-gray-300 dark:border-navy-600 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent dark:bg-navy-700 dark:text-white"
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <SafeIcon icon={showPassword ? FiEyeOff : FiEye} className="w-5 h-5" />
                </button>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-navy-600 hover:bg-navy-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <SafeIcon icon={FiLogIn} className="w-5 h-5" />
              <span>Sign In</span>
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Demo credentials: admin@navy.mil / admin123
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-900">
      {/* Header */}
      <div className="bg-white dark:bg-navy-800 shadow-sm border-b border-gray-200 dark:border-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <SafeIcon icon={FiSettings} className="w-8 h-8 text-navy-600 dark:text-gold-400" />
              <div>
                <h1 className="text-xl font-playfair font-bold text-navy-900 dark:text-white">
                  Admin Panel
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Tribute Management System
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-navy-900 dark:text-white">
                  Administrator
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  admin@navy.mil
                </p>
              </div>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-navy-800 rounded-lg shadow-sm p-6">
              <nav className="space-y-2">
                {adminTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-navy-600 text-white'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-navy-700'
                    }`}
                  >
                    <SafeIcon icon={tab.icon} className="w-5 h-5" />
                    <span className="font-medium">{tab.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white dark:bg-navy-800 p-6 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Total Messages</p>
                        <p className="text-2xl font-bold text-navy-900 dark:text-white">
                          {mockStats.totalMessages}
                        </p>
                      </div>
                      <SafeIcon icon={FiMessageCircle} className="w-8 h-8 text-blue-500" />
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-navy-800 p-6 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Pending Approval</p>
                        <p className="text-2xl font-bold text-navy-900 dark:text-white">
                          {mockStats.pendingMessages}
                        </p>
                      </div>
                      <SafeIcon icon={FiClock} className="w-8 h-8 text-orange-500" />
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-navy-800 p-6 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Total Visitors</p>
                        <p className="text-2xl font-bold text-navy-900 dark:text-white">
                          {mockStats.totalVisitors}
                        </p>
                      </div>
                      <SafeIcon icon={FiUsers} className="w-8 h-8 text-green-500" />
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white dark:bg-navy-800 rounded-lg shadow-sm">
                  <div className="p-6 border-b border-gray-200 dark:border-navy-700">
                    <h3 className="text-lg font-semibold text-navy-900 dark:text-white">
                      Pending Messages
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {mockPendingMessages.map((message) => (
                        <div key={message.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-navy-700 rounded-lg">
                          <div>
                            <p className="font-medium text-navy-900 dark:text-white">
                              {message.name}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 truncate max-w-xs">
                              {message.message}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                              {message.date}
                            </p>
                          </div>
                          <div className="flex space-x-2">
                            <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm">
                              Approve
                            </button>
                            <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm">
                              Reject
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab !== 'dashboard' && (
              <div className="bg-white dark:bg-navy-800 rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-navy-900 dark:text-white mb-4">
                  {adminTabs.find(tab => tab.id === activeTab)?.name} Management
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  This section would contain management tools for {activeTab}.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
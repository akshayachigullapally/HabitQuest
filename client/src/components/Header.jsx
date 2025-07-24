import React, { useState } from 'react';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';
import { FaUserCircle, FaBell, FaTrophy, FaSignOutAlt, FaCog, FaSun, FaMoon, FaDesktop, FaHome, FaUsers, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import RewardsMenu from './RewardsMenu';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { notifications } = useSelector((state) => state.notifications || { notifications: [] });
  
  const { theme, changeTheme } = useTheme();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showRewardsMenu, setShowRewardsMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  const unreadNotifications = notifications?.filter(notification => !notification.isRead).length || 0;
  
  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/login');
  };

  const handleThemeChange = (newTheme) => {
    changeTheme(newTheme);
    setShowProfileMenu(false);
  };
  
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">HabitQuest</h1>
            </Link>
          </div>
          
          {/* Main Navigation */}
          {user && (
            <nav className="hidden md:flex items-center space-x-8">
              <NavLink
                to="/dashboard"
                className={({ isActive }) => `
                  flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${isActive 
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30' 
                    : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700'}
                `}
              >
                <FaHome className="w-4 h-4" />
                <span>Dashboard</span>
              </NavLink>
              
              <NavLink
                to="/community"
                className={({ isActive }) => `
                  flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${isActive 
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30' 
                    : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700'}
                `}
              >
                <FaUsers className="w-4 h-4" />
                <span>Community</span>
              </NavLink>
              
              <NavLink
                to="/achievements"
                className={({ isActive }) => `
                  flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${isActive 
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30' 
                    : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700'}
                `}
              >
                <FaTrophy className="w-4 h-4" />
                <span>Achievements</span>
              </NavLink>
              
              {/* Rewards Menu */}
              <div className="relative">
                <button 
                  onClick={() => setShowRewardsMenu(!showRewardsMenu)}
                  className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <span>Rewards</span>
                  <FaChevronDown className="w-3 h-3" />
                </button>
                
                {showRewardsMenu && (
                  <div className="absolute top-full mt-1 left-0 z-50">
                    <RewardsMenu onClose={() => setShowRewardsMenu(false)} />
                  </div>
                )}
              </div>
            </nav>
          )}
          
          <div className="flex items-center space-x-3">
            {user && (
              <>
                {/* Notifications */}
                <Link 
                  to="/notifications" 
                  className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none relative transition-colors"
                  aria-label="Notifications"
                >
                  <FaBell className="w-5 h-5" />
                  {unreadNotifications > 0 && (
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                      {unreadNotifications > 9 ? '9+' : unreadNotifications}
                    </span>
                  )}
                </Link>
                
                {/* User Profile Menu */}
                <div className="relative">
                  <button 
                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                    className="flex items-center space-x-2 focus:outline-none p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    aria-expanded={showProfileMenu}
                    aria-haspopup="true"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                      {user.avatar ? (
                        <img src={user.avatar} alt={user.username} className="w-8 h-8 rounded-full" />
                      ) : (
                        <FaUserCircle className="w-6 h-6" />
                      )}
                    </div>
                    <div className="hidden md:block text-left">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                        {user.username}
                      </span>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Level {user.level || 1}
                      </div>
                    </div>
                    <FaChevronDown className="w-3 h-3 text-gray-400" />
                  </button>
                  
                  {showProfileMenu && (
                    <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50 border border-gray-200 dark:border-gray-700">
                      {/* User Info */}
                      <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                            {user.avatar ? (
                              <img src={user.avatar} alt={user.username} className="w-10 h-10 rounded-full" />
                            ) : (
                              <span className="text-lg font-bold">{user?.username?.[0]?.toUpperCase() || 'U'}</span>
                            )}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">{user.username}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Level {user.level || 1}</p>
                          </div>
                        </div>
                        
                        {/* XP Progress */}
                        <div className="mt-3">
                          <div className="flex justify-between text-xs text-gray-600 dark:text-gray-300 mb-1">
                            <span>XP: {user?.experience || 0}/{(user?.level || 1) * 100}</span>
                            <span>{Math.min(100, Math.round(((user?.experience || 0) / ((user?.level || 1) * 100)) * 100))}%</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div 
                              className="bg-blue-500 h-2 rounded-full transition-all duration-300" 
                              style={{ width: `${Math.min(100, Math.round(((user?.experience || 0) / ((user?.level || 1) * 100)) * 100))}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Menu Items */}
                      <Link 
                        to="/profile" 
                        className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        onClick={() => setShowProfileMenu(false)}
                      >
                        <FaUserCircle className="mr-3 w-4 h-4" />
                        Profile
                      </Link>
                      
                      <Link 
                        to="/settings" 
                        className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        onClick={() => setShowProfileMenu(false)}
                      >
                        <FaCog className="mr-3 w-4 h-4" />
                        Settings
                      </Link>
                      
                      {/* Theme Settings */}
                      <div className="border-t border-gray-200 dark:border-gray-700 mt-1 pt-1">
                        <div className="px-4 py-2 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Theme
                        </div>
                        <button
                          onClick={() => handleThemeChange('light')}
                          className={`flex items-center px-4 py-2 text-sm w-full text-left transition-colors ${
                            theme === 'light' 
                              ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                              : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                        >
                          <FaSun className="mr-3 w-4 h-4" /> Light Mode
                          {theme === 'light' && <span className="ml-auto text-blue-600 dark:text-blue-400">✓</span>}
                        </button>
                        <button
                          onClick={() => handleThemeChange('dark')}
                          className={`flex items-center px-4 py-2 text-sm w-full text-left transition-colors ${
                            theme === 'dark' 
                              ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                              : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                        >
                          <FaMoon className="mr-3 w-4 h-4" /> Dark Mode
                          {theme === 'dark' && <span className="ml-auto text-blue-600 dark:text-blue-400">✓</span>}
                        </button>
                        <button
                          onClick={() => handleThemeChange('system')}
                          className={`flex items-center px-4 py-2 text-sm w-full text-left transition-colors ${
                            theme === 'system' 
                              ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                              : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                        >
                          <FaDesktop className="mr-3 w-4 h-4" /> System Default
                          {theme === 'system' && <span className="ml-auto text-blue-600 dark:text-blue-400">✓</span>}
                        </button>
                      </div>
                      
                      {/* Logout */}
                      <div className="border-t border-gray-200 dark:border-gray-700 mt-1 pt-1">
                        <button 
                          onClick={() => {
                            setShowProfileMenu(false);
                            handleLogout();
                          }} 
                          className="w-full text-left flex items-center px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          <FaSignOutAlt className="mr-3 w-4 h-4" />
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
# HabitQuest - Gamified Habit Tracker

A full-stack web application that gamifies habit tracking to help users build consistent habits through engaging features like levels, achievements, quizzes, and community interaction.

## 🎮 Features

### Core Functionality
- **Habit Management**: Create, edit, and track daily/weekly habits
- **Gamification System**: 
  - Experience points (XP) and level progression
  - Achievement system with unlock conditions
  - Mystery box rewards for completing habits
  - Streak tracking and streak freezes
  - Interactive quizzes with hand gesture recognition

### User Experience
- **Dashboard**: Comprehensive overview of habits, stats, and progress
- **Community Features**: 
  - Share posts and achievements
  - Leaderboard to compete with other users
  - Social interaction and motivation
- **Notifications**: Smart reminder system for habit completion
- **Profile Management**: User profiles with statistics and achievements
- **Dark/Light Theme**: Toggle between themes for better user experience

### Technical Features
- **Real-time Notifications**: Browser notifications and in-app notifications
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Hand Gesture Recognition**: TensorFlow.js integration for interactive quizzes
- **Data Visualization**: Progress tracking with visual indicators

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with latest features
- **Redux Toolkit** - State management
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **TensorFlow.js** - Machine learning for hand gesture recognition
- **Vite** - Fast build tool and development server

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing

### Additional Libraries
- **React Toastify** - Toast notifications
- **React Icons** - Icon library
- **Canvas Confetti** - Celebration animations
- **Date-fns** - Date utility library
- **Axios** - HTTP client

## 📋 Prerequisites

Before running this application, make sure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local installation or MongoDB Atlas)

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/akshayachigullapally/HabitQuest.git
cd HabitQuest
```

### 2. Backend Setup
```bash
cd server
npm install
```

Create a `.env` file in the server directory:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### 3. Frontend Setup
```bash
cd ../client
npm install
```

Create a `.env` file in the client directory:
```env
VITE_API_URL=http://localhost:5000/api
```

### 4. Start the Application

**Backend (in server directory):**
```bash
npm start
# or for development with nodemon
npm run dev
```

**Frontend (in client directory):**
```bash
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## 📁 Project Structure

```
├── client/                    # React frontend application
│   ├── public/               # Static assets
│   ├── src/
│   │   ├── components/       # Reusable React components
│   │   ├── pages/           # Page components
│   │   ├── features/        # Redux slices and services
│   │   ├── context/         # React context providers
│   │   ├── utils/           # Utility functions
│   │   ├── layouts/         # Layout components
│   │   └── assets/          # Images and other assets
│   └── package.json
│
├── server/                   # Node.js backend application
│   ├── controllers/         # Route controllers
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   ├── server.js           # Entry point
│   └── package.json
│
└── README.md
```

## 🎯 Key Components

### Frontend Components
- **Dashboard**: Main user interface showing habits and progress
- **HabitCard**: Individual habit display with completion tracking
- **QuizComponent**: Interactive quiz with hand gesture recognition
- **MysteryBox**: Reward system for habit completion
- **Community**: Social features and user interaction
- **Achievements**: Achievement system display

### Backend Models
- **User**: User account and profile information
- **Habit**: Habit definitions and tracking data
- **Achievement**: Achievement definitions and unlock conditions
- **Notification**: User notification system
- **Post**: Community posts and interactions
- **Reward**: Reward system for gamification

## 🎮 How to Use

1. **Register/Login**: Create an account or sign in
2. **Create Habits**: Add daily or weekly habits you want to track
3. **Complete Habits**: Mark habits as complete to earn XP and maintain streaks
4. **Earn Achievements**: Unlock achievements by meeting specific criteria
5. **Level Up**: Gain experience points to increase your level
6. **Open Mystery Boxes**: Get rewards for completing habits
7. **Take Quizzes**: Interactive quizzes with hand gesture controls
8. **Join Community**: Share your progress and motivate others
9. **Compete**: Check the leaderboard to see how you rank

## 🚀 Deployment

### Frontend (Vercel)
The client is configured for Vercel deployment with `vercel.json` configuration.

```bash
cd client
npm run build
# Deploy to Vercel
```

### Backend (Heroku/Railway/Render)
```bash
cd server
# Set environment variables on your platform
# Deploy according to your platform's instructions
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- React and Redux communities for excellent documentation
- TensorFlow.js team for machine learning capabilities
- Tailwind CSS for the amazing utility-first approach
- MongoDB for flexible database solutions

## 📞 Contact

Project Link: [https://github.com/akshayachigullapally/HabitQuest](https://github.com/akshayachigullapally/HabitQuest)

---

**Happy Habit Building! 🎯✨**
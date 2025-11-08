# ATW Campus - Internship Learning Platform

A comprehensive web-based learning and internship management platform designed to help aspiring developers enhance their skills through coding challenges, mentorship, community engagement, and project-based learning.

## Overview

ATW Campus is a modern React-based platform that provides a complete ecosystem for tech interns and learners. The platform combines practical coding challenges, progress tracking, mentorship opportunities, community features, and curated learning resources.

## Features

### 🏠 Home Page
- Engaging hero section showcasing platform benefits
- Key statistics and achievements (2,500+ active interns, 85% placement rate)
- Feature highlights and technology stack overview
- Student testimonials and success stories
- Call-to-action sections

### 💻 Coding Lab
- **Coding Challenges**: Curated programming problems with difficulty levels (Easy, Medium, Hard)
- **Project Management**: Create and manage coding projects
- **Skill Progress Tracking**: Monitor improvement across different technologies
- **Achievements System**: Earn badges and rewards for milestones
- **Team Collaboration**: Join teams and work collaboratively
- **Leaderboard**: Track rankings and compete with peers
- **Weekly Statistics**: View hours coded, challenges solved, and points earned

### 📊 Progress Tracking
- **Personal Dashboard**: Visual overview of learning journey
- **Statistics Overview**: Track challenges completed, projects finished, and total hours coded
- **Learning Path**: Structured curriculum with progress indicators
- **Goals Tracker**: Set and monitor learning objectives
- **Weekly Activity Charts**: Visualize coding activity patterns
- **Milestones**: Celebrate achievements and unlock certificates

### 👥 Mentorship
- Browse and connect with experienced mentors
- Filter mentors by expertise and availability
- View detailed mentor profiles
- Book mentorship sessions
- FAQ section for common queries
- Learn how the mentorship program works

### 🌐 Community
- **Social Feed**: Share updates, achievements, and insights
- **Create Posts**: Engage with the community
- **Events**: Discover and participate in community events
- **Member Directory**: Connect with fellow learners
- **Interactive Discussions**: Comment and collaborate

### 📚 Resources
- **Curated Learning Materials**: Organized by technology and topic
- **Resource Filters**: Find content by category, difficulty, and type
- **Resource Viewer**: In-platform content viewing
- **Bookmarks & Collections**: Save and organize favorite resources
- **Search Functionality**: Quick access to needed materials

## Tech Stack

### Core Technologies
- **React** (v19.2.0) - UI library
- **React Router DOM** (v7.9.4) - Client-side routing
- **React Icons** (v5.5.0) - Icon components

### Backend & Deployment
- **Firebase** (v12.4.0) - Backend services and hosting
  - Hosting configuration included
  - SPA routing support

### Development Tools
- **React Scripts** (v5.0.1) - Build tooling
- **Testing Library** - Comprehensive testing suite
  - @testing-library/react (v16.3.0)
  - @testing-library/jest-dom (v6.9.1)
  - @testing-library/user-event (v13.5.0)
- **Web Vitals** (v2.1.4) - Performance monitoring

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.0.0 or higher recommended)
- **npm** (v6.0.0 or higher) or **yarn**
- **Git** for version control
- A modern web browser (Chrome, Firefox, Safari, or Edge)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd campus
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Configure Firebase (if needed)**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Add your Firebase configuration to the project
   - Update firebase configuration in your source code if necessary

## Available Scripts

### Development

#### `npm start`
Runs the app in development mode.
- Open [http://localhost:3000](http://localhost:3000) to view in your browser
- Hot reload enabled - page reloads on file changes
- Lint errors displayed in console

#### `npm test`
Launches the test runner in interactive watch mode.
- Run all test suites
- See test coverage and results
- Learn more about [running tests](https://facebook.github.io/create-react-app/docs/running-tests)

#### `npm run build`
Builds the app for production to the `build` folder.
- Optimized production build
- Minified and bundled code
- Filenames include content hashes for caching
- Ready for deployment

#### `npm run eject`
**Warning: This is a one-way operation!**
- Ejects from Create React App configuration
- Provides full control over build config
- Only use if absolutely necessary

## Project Structure

```
campus/
├── public/                 # Static files
│   ├── assets/            # Images and media files
│   │   ├── avatar[1-4].jpg
│   │   ├── hero.jpg
│   │   └── page-000[2-7].jpg
│   ├── atw_campus_logo.png
│   ├── logo_title.svg
│   ├── index.html         # HTML template
│   ├── manifest.json      # PWA manifest
│   └── robots.txt
├── src/                   # Source code
│   ├── components/        # Reusable components
│   │   ├── ActiveProjects.jsx
│   │   ├── ChallengeCard.jsx
│   │   ├── CTA.jsx
│   │   ├── Features.jsx
│   │   ├── Footer.jsx
│   │   ├── GoalsTracker.jsx
│   │   ├── Hero.jsx
│   │   ├── LearningPath.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProgressOverview.jsx
│   │   ├── ProgressStats.jsx
│   │   ├── SkillProgress.jsx
│   │   ├── Stats.jsx
│   │   ├── TechGrid.jsx
│   │   ├── Technologies.jsx
│   │   ├── TerminalCard.jsx
│   │   ├── Testimonials.jsx
│   │   ├── community/     # Community page components
│   │   │   ├── CommunityHeader.jsx
│   │   │   ├── CreatePostModal.jsx
│   │   │   ├── EventsList.jsx
│   │   │   ├── Feed.jsx
│   │   │   ├── MembersList.jsx
│   │   │   ├── PostCard.jsx
│   │   │   └── Sidebar.jsx
│   │   ├── mentorship/    # Mentorship page components
│   │   │   ├── CTA.jsx
│   │   │   ├── FAQ.jsx
│   │   │   ├── HowItWorks.jsx
│   │   │   ├── MentorCard.jsx
│   │   │   ├── MentorFilters.jsx
│   │   │   ├── MentorProfileModal.jsx
│   │   │   └── Mentors.jsx
│   │   └── resources/     # Resources page components
│   │       ├── ResourceCard.jsx
│   │       ├── ResourceFilters.jsx
│   │       ├── ResourceHeader.jsx
│   │       ├── ResourceList.jsx
│   │       ├── ResourceSidebar.jsx
│   │       └── ResourceViewerModal.jsx
│   ├── pages/             # Page components
│   │   ├── Home.jsx
│   │   ├── CodingLab.jsx
│   │   ├── Progress.jsx
│   │   ├── Mentorship.jsx
│   │   ├── Community.jsx
│   │   ├── Resources.jsx
│   │   ├── CodingLab.css
│   │   ├── Progress.css
│   │   ├── community.css
│   │   ├── mentorship.css
│   │   └── resources.css
│   ├── assets/            # Source assets
│   ├── App.js             # Main app component with routing
│   ├── App.css            # Global styles
│   ├── App.test.js        # App tests
│   ├── index.js           # Entry point
│   ├── index.css          # Global CSS
│   ├── setupTests.js      # Test configuration
│   └── reportWebVitals.js # Performance monitoring
├── firebase.json          # Firebase configuration
├── package.json           # Dependencies and scripts
└── README.md             # Project documentation
```

## Routes

The application includes the following routes:

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Landing page with overview |
| `/home` | Home | Alternative home route |
| `/coding-lab` | CodingLab | Coding challenges and projects |
| `/progress` | Progress | Personal progress tracking |
| `/mentors` | Mentorship | Browse and connect with mentors |
| `/community` | Community | Social feed and community features |
| `/resources` | Resources | Learning materials and resources |

## Firebase Configuration

The project is configured for Firebase hosting with Single Page Application (SPA) support.

**firebase.json** includes:
- Build output directory: `build`
- SPA routing rewrites
- Ignored files configuration

To deploy to Firebase:
```bash
npm run build
firebase deploy
```

Make sure you're logged in to Firebase CLI:
```bash
firebase login
```

## Development Guidelines

### Component Organization
- **components/**: Reusable UI components
- **pages/**: Full page components with routing
- **Grouped components**: Features like community, mentorship, and resources have dedicated subdirectories

### Styling
- Component-specific CSS files co-located with page components
- Global styles in `index.css` and `App.css`
- Responsive design principles

### Code Quality
- ESLint configuration included (extends react-app)
- Testing setup with Jest and React Testing Library
- Follow React best practices and hooks guidelines

## Building for Production

1. **Create optimized build**
   ```bash
   npm run build
   ```

2. **Test production build locally**
   ```bash
   npx serve -s build
   ```

3. **Deploy to Firebase**
   ```bash
   firebase deploy
   ```

The build folder will contain:
- Minified and optimized JavaScript bundles
- Optimized CSS
- Static assets with cache-friendly filenames
- Service worker (if PWA features enabled)

## Performance Monitoring

The app includes Web Vitals monitoring to track:
- Cumulative Layout Shift (CLS)
- First Input Delay (FID)
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Time to First Byte (TTFB)

View metrics in `src/reportWebVitals.js`

## Browser Support

Production builds support:
- Modern browsers (>0.2% market share)
- Excludes dead browsers
- Excludes Opera Mini

Development mode supports:
- Latest Chrome
- Latest Firefox
- Latest Safari

## Troubleshooting

### Common Issues

**Build fails to minify**
- See [CRA troubleshooting guide](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

**Port 3000 already in use**
```bash
# Use different port
PORT=3001 npm start
```

**Module not found errors**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Firebase deployment issues**
```bash
# Ensure you're logged in
firebase login
# Reinitialize if needed
firebase init
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Testing

Run the test suite:
```bash
npm test
```

Run tests with coverage:
```bash
npm test -- --coverage
```

## Future Enhancements

Potential features for future development:
- Real-time code editor integration
- Live mentorship sessions
- Advanced analytics dashboard
- Mobile application
- AI-powered code review
- Gamification enhancements
- Integration with external learning platforms
- Certificate generation system

## Learn More

- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React Documentation](https://reactjs.org/)
- [React Router Documentation](https://reactrouter.com/)
- [Firebase Documentation](https://firebase.google.com/docs)

## License

This project is part of the ATW Interns program.

## Support

For support, please contact the development team or open an issue in the repository.

---

**Built with ❤️ for aspiring developers**

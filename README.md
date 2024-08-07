# Illustration Idea Generator

[![Netlify Status](https://api.netlify.com/api/v1/badges/96c6f571-15ef-4cca-9b4e-9ce54f755992/deploy-status)](https://app.netlify.com/sites/idea-generator-vy538/deploys)

This project is a responsive web application that generates random illustration ideas using a slot machine-like interface. It supports both English and Traditional Chinese languages and includes a gallery feature to showcase illustrations. This project was developed with assistance from Claude, an AI assistant created by Anthropic.

## Features

- Generates random ideas for illustrations across five categories: adjective, character, location, verb, and other element
- Animated slot machine spinning effect
- Bilingual support (English and Traditional Chinese)
- Gallery page to showcase created illustrations
- Enlarged view for gallery items with interactive overlay
- Responsive design for desktop, tablet, and mobile devices
- Mobile-friendly navigation with hamburger menu
- User authentication with Google Sign-In
- Role-based access control (Admin and User roles)
- Invite code system for restricting access to idea submission
- Admin panel for managing ideas, gallery items, and users
- Ability for admins to generate and manage invite codes for users
- Material-UI components for a consistent and modern UI

## Project Structure

```
illustration-idea-generator/
├── public/
│   ├── favicon.ico
│   ├── logo.svg
│   ├── index.html
│   ├── locales/
│   │   ├── en.json
│   │   └── zh.json
│   └── media/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── DesktopHeader.tsx
│   │   ├── MobileHeader.tsx
│   │   ├── SlotMachine.tsx
│   │   ├── MobileSlotMachine.tsx
│   │   ├── DesktopSlotMachine.tsx
│   │   ├── GenerateButton.tsx
│   │   ├── Gallery.tsx
│   │   ├── GalleryItem.tsx
│   │   ├── EnlargedView.tsx
│   │   ├── PrivateRoute.tsx
│   │   └── admin/
│   │       ├── AdminIdeaItem.tsx
│   │       ├── ManageIdeasSection.tsx
│   │       └── ManageUsersSection.tsx
│   ├── pages/
│   │   ├── MainPage.tsx
│   │   ├── AddIdeaPage.tsx
│   │   ├── AdminPage.tsx
│   │   ├── GalleryPage.tsx
│   │   └── InviteRequiredPage.tsx
│   ├── hooks/
│   │   ├── useUserRole.ts
│   │   ├── useAuth.ts
│   │   └── AuthContext.tsx
│   ├── services/
│   │   ├── database.tsx
│   │   └── firebase.ts
│   ├── utils/
│   │   ├── ideaUtils.ts
│   │   └── clipboard.ts
│   ├── styles/
│   │   ├── theme.ts
│   │   ├── muiTheme.ts
│   │   ├── Typography.ts
│   │   ├── HeaderStyles.ts
│   │   ├── MobileHeaderStyles.ts
│   │   ├── GlobalStyles.ts
│   │   ├── LayoutStyles.ts
│   │   ├── SlotMachineStyles.ts
│   │   ├── MobileSlotMachineStyles.ts
│   │   ├── GenerateButtonStyles.ts
│   │   ├── GalleryStyles.ts
│   │   ├── EnlargedViewStyles.ts
│   │   └── AdminPageStyles.ts
│   ├── types/
│   │   └── index.ts
│   ├── assets/
│   │   └── icons/
│   │       └── close-icon.svg
│   ├── i18n.ts
│   ├── App.tsx
│   └── index.tsx
├── package.json
├── tsconfig.json
└── README.md

```

## Setup and Installation

1. Clone the repository
2. Run `npm install` to install dependencies
3. Set up a Firebase project and obtain the configuration
4. Create a `.env` file in the root directory with the following variables:
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   REACT_APP_ADMIN_EMAIL=your_admin_email@example.com
5. Place your Firebase service account key (serviceAccountKey.json) in the `scripts/` directory
6. Run `npm run populate-db` to populate the initial data in Firebase
7. Run `npm start` to start the development server

## User Flow

## User Flow

1. User visits the website on desktop, tablet, or mobile device
2. Main page displays a slot machine interface with five category slots
3. User can log in using Google authentication
4. User clicks "Generate" to spin for new random ideas
5. User can switch between English and Traditional Chinese
6. Gallery page showcases illustrations with generated idea tags
7. Enlarged view available for illustrations in the gallery on all devices
8. Mobile users can access navigation options via a hamburger menu
9. Logged-in users with invite codes or admin status can access the "Add Idea" page
10. Admin users can access the admin panel for managing ideas and users
11. Admins can generate, copy, and cancel invite codes for users

## Technologies Used

- React
- TypeScript
- Firebase (Authentication, Realtime Database)
- react-i18next
- styled-components
- Material-UI
- react-responsive
- react-tabs
- Netlify

## Future Improvements

- Implement more robust error handling
- Add more categories and ideas
- User accounts with favorite combinations
- Enhanced animations
- Sharing functionality
- User contribution system
- Moderation system for user-submitted content
- Improved invite code management system

## License

MIT License

Copyright (c) 2024 Victoria Yen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

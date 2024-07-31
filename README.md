[![Netlify Status](https://api.netlify.com/api/v1/badges/96c6f571-15ef-4cca-9b4e-9ce54f755992/deploy-status)](https://app.netlify.com/sites/idea-generator-vy538/deploys)

# Illustration Idea Generator

This project is a web application that generates random illustration ideas using a slot machine-like interface. It supports both English and Chinese languages and includes a gallery feature to showcase illustrations.

## Features

- Generates random ideas for illustrations across five categories: adjective, character, location, verb, and other element
- Displays small illustrations representing each idea
- Animated slot machine spinning effect
- Responsive design that works on both desktop and mobile devices
- Bilingual support (English and Chinese)
- Gallery page to showcase created illustrations
- Enlarged view for gallery items with interactive overlay

## Project Structure

```
illustration-idea-generator/
├── public/
│   ├── logo.svg
│   ├── index.html
│   ├── locales/
│   │   ├── en.json
│   │   └── zh.json
│   └── assets/
│       └── icons/
│           └── close-icon.svg
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── SlotMachine.tsx
│   │   ├── GenerateButton.tsx
│   │   ├── Gallery.tsx
│   │   ├── GalleryItem.tsx
│   │   └── EnlargedView.tsx
│   ├── pages/
│   │   ├── MainPage.tsx
│   │   └── GalleryPage.tsx
│   ├── hooks/
│   │   └── useRandomIdeas.ts
│   ├── services/
│   │   └── api.ts
│   ├── data/
│   │   ├── gallery.json
│   │   └── ideas.ts
│   ├── styles/
│   │   ├── theme.ts
│   │   ├── Typography.ts
│   │   ├── HeaderStyles.ts
│   │   ├── GlobalStyles.ts
│   │   ├── LayoutStyles.ts
│   │   ├── SlotMachineStyles.ts
│   │   ├── GenerateButtonStyles.ts
│   │   ├── GalleryStyles.ts
│   │   └── EnlargedViewStyles.ts
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   ├── assets/
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
3. Run `npm start` to start the development server

## User Flow

1. User visits the website
2. Main page displays a slot machine interface with five category slots
3. User clicks "Generate" to spin for new random ideas
4. User can switch between English and Chinese
5. Gallery page showcases illustrations with generated idea tags
6. Enlarged view available for illustrations in the gallery

## Technologies Used

- React
- TypeScript
- react-i18next
- styled-components
- Netlify

## Future Improvements

- Implement backend API
- Add more categories and ideas
- User accounts with favorite combinations
- Enhanced animations
- Sharing functionality
- User contribution system
- Moderation system for user-submitted content

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

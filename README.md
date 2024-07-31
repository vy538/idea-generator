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
2. The main page displays a slot machine interface with five categories
3. Initial random ideas and their corresponding images are shown in each slot
4. User can click the "Generate" button to spin the slot machine and get new random ideas
5. The slot machine animates, spinning the ideas and images
6. User can switch between English and Chinese using language buttons in the header
7. User can navigate to the Gallery page to view created illustrations
8. In the Gallery, user can click on an illustration to view an enlarged version
9. The enlarged view displays the image with a blurred overlay and close button
10. User can close the enlarged view by clicking the close button or outside the image

## Technologies Used

- React
- TypeScript
- react-i18next for internationalization
- styled-components for styling

## Development Notes

- The `useRandomIdeas` hook in `src/hooks/useRandomIdeas.ts` manages the state and logic for generating random ideas
- Ideas are stored in `src/data/ideas.ts` and can be easily updated or expanded
- Gallery data is stored in `src/data/gallery.json`
- Translations are managed using i18next, with language files stored in `public/locales/`
- The project uses a component-based architecture with separate files for each major component
- Styles are organized in the `src/styles` directory, with separate files for each component
- The `theme.ts` file contains global theme variables used across the application
- The `Typography.ts` file defines reusable text components

## Recent Updates

- Added a Gallery feature to showcase illustrations
- Implemented an enlarged view for gallery items with a blurred overlay
- Created separate components for GalleryItem and EnlargedView
- Updated styling to use theme variables consistently
- Improved z-index management for proper layering of components

## Future Improvements

## Future Improvements

- Implement backend API to replace mock data
- Add more categories or ideas to the generator
- Implement user accounts and ability to save favorite combinations
- Enhance the spinning animation with more advanced effects or transitions
- Add sharing functionality for gallery items
- Develop an invitation system for select users to contribute their own ideas or images
- Create a user-friendly interface for invited users to submit and manage their contributions
- Implement a moderation system for reviewing and approving user-submitted content
- Add attribution features to credit users for their contributed ideas and images in the generator and gallery

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

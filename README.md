# Illustration Idea Generator

This project is a web application that generates random illustration ideas using a slot machine-like interface. It supports both English and Chinese languages.

## Features

- Generates random ideas for illustrations across five categories: adjective, character, location, verb, and other element
- Responsive design that works on both desktop and mobile devices
- Bilingual support (English and Chinese)
- Gallery page to showcase created illustrations (to be implemented)

## Project Structure

```
illustration-idea-generator/
├── public/
│   ├── index.html
│   └── locales/
│       ├── en.json
│       └── zh.json
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── SlotMachine.tsx
│   │   ├── GenerateButton.tsx
│   │   └── Gallery.tsx
│   ├── pages/
│   │   ├── MainPage.tsx
│   │   └── GalleryPage.tsx
│   ├── hooks/
│   │   └── useRandomIdeas.ts
│   ├── services/
│   │   └── api.ts
│   ├── data/
│   │   └── ideas.ts
│   ├── styles/
│   │   ├── HeaderStyles.ts
│   │   ├── SlotMachineStyles.ts
│   │   ├── GenerateButtonStyles.ts
│   │   └── GalleryStyles.ts
│   ├── types/
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
3. Initial random ideas are shown in each slot
4. User can click the "Generate" button to get new random ideas
5. User can switch between English and Chinese using language buttons in the header
6. User can navigate to the Gallery page (to be implemented) to view created illustrations

## Technologies Used

- React
- TypeScript
- react-i18next for internationalization
- styled-components for styling

## Development Notes

- The `useRandomIdeas` hook in `src/hooks/useRandomIdeas.ts` manages the state and logic for generating random ideas
- Ideas are stored in `src/data/ideas.ts` and can be easily updated or expanded
- Translations are managed using i18next, with language files stored in `public/locales/`
- The project is set up to use a component-based architecture with separate files for each major component

## Future Improvements

- Implement the Gallery page to showcase created illustrations
- Add functionality to save or share generated ideas
- Implement backend API to replace mock data
- Add more categories or ideas to the generator
- Implement user accounts and ability to save favorite combinations

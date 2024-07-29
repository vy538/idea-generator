# Illustration Idea Generator

This project is a web application that generates random illustration ideas using a slot machine-like interface. It supports both English and Chinese languages.

## Features

- Generates random ideas for illustrations across five categories: adjective, character, location, verb, and other element
- Displays small illustrations representing each idea
- Animated slot machine spinning effect
- Responsive design that works on both desktop and mobile devices
- Bilingual support (English and Chinese)
- Gallery page to showcase created illustrations (to be implemented)

## Project Structure

```
illustration-idea-generator/
├── public/
│   ├── index.html
│   ├── locales/
│   │   ├── en.json
│   │   └── zh.json
│   └── media/
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
│   │   ├── theme.ts
│   │   ├── HeaderStyles.ts
│   │   ├── GlobalStyles.ts
│   │   ├── LayoutStyles.ts
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
3. Initial random ideas and their corresponding images are shown in each slot
4. User can click the "Generate" button to spin the slot machine and get new random ideas
5. The slot machine animates, spinning the ideas and images
6. User can switch between English and Chinese using language buttons in the header
7. User can navigate to the Gallery page (to be implemented) to view created illustrations

## Technologies Used

- React
- TypeScript
- react-i18next for internationalization
- styled-components for styling

## Development Notes

- The `useRandomIdeas` hook in `src/hooks/useRandomIdeas.ts` manages the state and logic for generating random ideas
- Ideas are stored in `src/data/ideas.ts` and can be easily updated or expanded
- Each idea now includes an image property for visual representation
- Translations are managed using i18next, with language files stored in `public/locales/`
- The project uses a component-based architecture with separate files for each major component
- The `SlotMachine` component now includes an animated spinning effect for a more engaging user experience

## Future Improvements

- Implement the Gallery page to showcase created illustrations
- Add functionality to save or share generated ideas
- Implement backend API to replace mock data
- Add more categories or ideas to the generator
- Implement user accounts and ability to save favorite combinations
- Enhance the spinning animation with more advanced effects or transitions

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

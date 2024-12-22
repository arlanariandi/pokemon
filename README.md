# Pokemon Explorer

## Description
Pokemon Explorer is a web application that allows users to explore and view details of various Pokémon. Users can scroll through an infinite list of Pokémon, click on individual Pokémon to view detailed stats, and enjoy a smooth and dynamic user experience.

## Features
1. **Infinite Scroll**: Automatically load more Pokémon as you scroll down.
2. **Detailed Stats Page**: View detailed information about a specific Pokémon, including ID, type, and stats (HP, Attack, Defense, Speed, etc.).
3. **Responsive Design**: Optimized for both desktop and mobile devices.
4. **Dynamic Styling**: Types of Pokémon are color-coded for better visual distinction.
5. **Loading State**: Displays a loading indicator while fetching data.
6. **Back Navigation**: Return to the previous page without resetting the scroll position.

## Technologies Used
- **React JS**: For building the user interface.
- **Tailwind CSS**: For styling the application.
- **Axios**: For making API requests.
- **React Router**: For handling navigation and routing.

## Folder Structure
```
project-root/
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Loading.jsx
│   │   ├── Menubar.jsx
│   │   ├── Navbar.jsx
│   │   └── PokemonList.jsx
│   ├── hooks/
│   │   ├── useFetchPokemon.js
│   │   ├── useFetchPokemonDetails.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── PokemonDetail.jsx
│   ├── App.jsx
│   ├── index.css
│   └── index.js
├── public/
└── README.md
```

## API Integration
Data is fetched from the Pokémon API (https://pokeapi.co/) to retrieve details such as:
- Name
- ID
- Image
- Type(s)
- Stats (HP, Attack, Defense, etc.)

## How It Works
1. **Fetching Data**:
    - `useFetchPokemon`: Handles fetching the list of Pokémon with infinite scrolling.
    - `useFetchPokemonDetails`: Fetches detailed information for a specific Pokémon.
2. **Displaying Data**:
    - `PokemonList`: Displays a grid of Pokémon cards.
    - `PokemonCard`: A reusable component for displaying individual Pokémon.
3. **Navigation**:
    - `React Router` is used to navigate between the home page and the detail page.
4. **Styling**:
    - Tailwind CSS is used for consistent and responsive design.
5. **Stat Bars**:
    - Displayed as horizontal bars proportional to the stat values, scaled to a maximum of 1000.

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/pokemon-explorer.git
   ```
2. Navigate to the project directory:
   ```bash
   cd pokemon-explorer
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and navigate to:
   ```
http://localhost:3000
   ```

## Usage
1. Scroll through the list of Pokémon on the home page.
2. Click on a Pokémon card to view detailed information.
3. Use the "Back" button to return to the home page.

## Future Enhancements
1. Add search functionality to find Pokémon by name or ID.
2. Add filters for Pokémon types.
3. Include more animations and transitions.
4. Implement caching for faster loading.

## Contributors
- **Your Name** - Developer

## License
This project is licensed under the MIT License. See the LICENSE file for details.


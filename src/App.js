import React, { useEffect } from 'react';
import './features/Theme/theme.css';
import './App.css';
import Header from './features/Header/Header';
import Home from './features/Home/Home';
import Subreddits from './features/Subreddits/Subreddits';
import Filters from './features/Filters/Filters';
import Post from './features/Post/Post';
import { useSelector } from 'react-redux';
import { selectTheme } from './features/Theme/themeSlice';

function App() {
  
  const theme = useSelector(selectTheme);

  return (
    <div id="app-container" className={theme}>
      <Header />
      
      <main>
        <Filters />
        <Home />
      </main>
      <aside>
        <Subreddits />
      </aside>
      
    </div>
    
  );
}

export default App;

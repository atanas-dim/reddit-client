import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import '../features/Theme/theme.css';
import './App.css';
import Header from '../features/Header/Header';
import Home from '../features/Home/Home';
import Subreddit from '../features/Subreddit/Subreddit';
import SearchResults from '../features/SearchResults/SearchResults';
import SubredditsAside from '../features/SubredditsAside/SubredditsAside';
import { useSelector } from 'react-redux';
import { selectTheme } from '../features/Theme/themeSlice';

function App() {
  
  const theme = useSelector(selectTheme);

  return (
    <Router>
      <div id="app-container" className={theme}>
        <Header />
          
        <main>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/r/:id" component={Subreddit} />
            <Route path="/search/:id" component={SearchResults} />
          </Switch>
        </main>
        <aside>
          <SubredditsAside />
        </aside>

      </div>
    </Router>
    
  );
}

export default App;

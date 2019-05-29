import React from 'react';
import './App.scss';
import Intro from './components/Intro';
import TeamList from './components/TeamList';

function App() {
  return (
    <div className="App">
      <Intro />
      <TeamList />
    </div>
  );
}

export default App;

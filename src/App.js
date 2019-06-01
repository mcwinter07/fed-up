import React from 'react';
import './App.scss';
import Intro from './components/Intro';
import TeamList from './components/TeamList';
import TheChallenge from './components/TheChallenge';

function App() {
  return (
    <div className="App">
      <Intro />
      <TeamList />
      <TheChallenge />
    </div>
  );
}

export default App;
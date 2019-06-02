import React from 'react';
import './App.scss';
import Intro from './components/Intro';
import TeamList from './components/TeamList';
import TheChallenge from './components/TheChallenge';
import TheProcess from './components/TheProcess';
import ThePitch from './components/ThePitch';
import TheResult from './components/TheResult';

function App() {
  return (
    <div className="App">
      <Intro />
      <TeamList />
      <TheChallenge />
      <TheProcess />
      <ThePitch />
      <TheResult/>
    </div>
  );
}

export default App;
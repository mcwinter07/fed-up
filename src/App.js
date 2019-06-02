import React from 'react';
import './App.scss';
import './styles/main.scss';
import Intro from './components/Intro';
import TeamList from './components/TeamList';
import TheChallenge from './components/TheChallenge';
import TheProcess from './components/TheProcess';
import ThePitch from './components/ThePitch';

function App() {
  return (
    <div className="App">
      <Intro />
      <TeamList />
      <TheChallenge />
      <TheProcess />
      <ThePitch />
    </div>
  );
}

export default App;
import React from 'react';
import './App.scss';
import Intro from './components/Intro';
import TeamList from './components/TeamList';
import TheProblem from './components/TheProblem';

function App() {
  return (
    <div className="App">
      <Intro />
      <TeamList />
      <TheProblem />
    </div>
  );
}

export default App;
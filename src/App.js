import React from 'react';
import './styles/main.scss';
import Intro from './components/Intro';
import TeamList from './components/TeamList';
import TheChallenge from './components/TheChallenge';
import TheProcess from './components/TheProcess';
import ThePitch from './components/ThePitch';
import TheResult from './components/TheResult';
import RelatedLinks from './components/RelatedLinks';
import MadeBy from './components/MadeBy';

function App() {
  return (
    <div className="App">
      <Intro />
      <TeamList />
      <TheChallenge />
      <TheProcess />
      <ThePitch />
      <TheResult />
      <RelatedLinks />
      <MadeBy />
    </div>
  );
}

export default App;
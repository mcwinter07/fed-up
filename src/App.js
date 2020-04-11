import React from 'react';
import './styles/main.scss';
import Intro from './components/Intro';
import TheTeam from './components/TheTeam';
import TheChallenge from './components/TheChallenge';
import TheProcess from './components/TheProcess';
import ThePitch from './components/ThePitch';
import TheResult from './components/TheResult';
import RelatedLinks from './components/RelatedLinks';

function App() {
  return (
    <div className="App">
      <Intro />
      <TheTeam />
      <TheChallenge />
      <TheProcess />
      <ThePitch />
      <TheResult />
      <RelatedLinks />
    </div>
  );
}

export default App;
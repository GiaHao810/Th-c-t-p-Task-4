import './App.css';
import A from './components/A';
import B from './components/B';
import C from './components/C';
import React, { useState } from 'react';

function App() {
  const [links, setLinks] = useState([]);

  const addLink = (link) => {
    setLinks([...links, link]);
  };

  return (
    <div className="App">
      <A onAddLink={addLink} />
      <B links={links} />
      <C selectedLink={links}/>
    </div>
  );
}

export default App;

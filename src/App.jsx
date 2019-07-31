import React from 'react';
import { Button, Loader } from 'lime-cl';

import './App.css';

function App() {
  return (
    <div className="App">
      <Button value="Lime CL Button" loading />
      <Loader size="big" color="#f00" />
    </div>
  );
}

export default App;

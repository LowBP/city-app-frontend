import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home';

const App: React.FC = () => {

  return (
    <Router>
      <Home />
    </Router>
  );
};

export default App;

import React, { useCallback, useState } from 'react';
import DemoOutput from './components/Demo/DemoOutput';
import './App.css';
import Button from './components/UI/Button/Button';

function App() {
  const [allowToggle, setAllowToggle] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph(prevParagraph => !prevParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggle!</Button>
      <Button onClick={toggleParagraphHandler}>Toggle!</Button>
    </div>
  );
}

export default App;

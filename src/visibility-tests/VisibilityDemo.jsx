import React, { useState } from 'react';
import './VisibilityDemo.css';

function VisibilityDemo() {
  const [domPresent, setDOMPresent] = useState(true);
  const [visible, setVisible] = useState('visible');
  const [displayValue, setDisplayValue] = useState('block');
  const [opaque, setOpacity] = useState(1.0);
  const [hidden, setHidden] = useState(false);

  return (
    <>
      <div className="columns">
        <div className="column">
          <h3>In the DOM</h3>
          <div className="container-box">
            {domPresent ? <Box data-testid="DOM" /> : ''}
          </div>
          <button
            className="button is-primary is-small"
            onClick={() => setDOMPresent(!domPresent)}
          >
            Toggle DOM
          </button>
        </div>
        <div className="column">
          <h3>Visibility</h3>
          <div className="container-box">
            <Box style={{ visibility: visible }} data-testid="visibility" />
          </div>
          <button
            className="button is-primary is-small"
            onClick={() => setVisible(visible === 'visible' ? 'hidden' : 'visible')}
          >
            Toggle Visibility
          </button>
        </div>
        <div className="column">
          <h3>Display</h3>
          <div className="container-box">
            <Box style={{ display: displayValue }} data-testid="display" />
          </div>
          <button
            className="button is-primary is-small"
            onClick={() => setDisplayValue(displayValue === 'block' ? 'none' : 'block')}
          >
            Toggle Display
          </button>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <h3>Opacity</h3>
          <div className="container-box">
            <Box style={{ opacity: opaque }} data-testid="opacity" />
          </div>
          <button
            className="button is-primary is-small"
            onClick={() => setOpacity(opaque === 1 ? 0 : 1)}
          >
            Toggle Opacity
          </button>
        </div>
        <div className="column">
          <h3>Hidden</h3>
          <div className="container-box">
            <Box hidden={hidden} data-testid="hidden" />
          </div>
          <button
            className="button is-primary is-small"
            onClick={() => setHidden(!hidden)}
          >
            Toggle Hidden
          </button>
        </div>
      </div>
    </>
  );
}

function Box(props) {
  return <div className="visibility-box" {...props}></div>;
}

export default VisibilityDemo;

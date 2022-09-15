import React from 'react';
import './DrumPad.css';

function DrumPad(props) {
  const { keyCode, keyTrigger, id, url } = props.pad;

  function handleKeyDown(event) {
    if (event.keyCode === keyCode) {
      playSound();
    } else return;
  }

  function playSound() {
    const sound = document.getElementById(keyTrigger);
    sound.currentTime = 0;
    sound.play();
    props.setDisplay(id.replace(/-/g, ' '));
  }

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div>
      <button id={id} className="drum-pad" onClick={playSound}>
        <audio className="clip" id={keyTrigger} src={url} />
        {keyTrigger}
      </button>
    </div>
  );
}

export default DrumPad;

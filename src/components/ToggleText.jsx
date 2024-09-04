import { useRef, useState } from 'react';

function ToggleText() {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [duration, setDuration] = useState(0.5);

  function handleClick() {
    const animationDuration = `${duration}s`;
    textRef.current.style.transition = `all ${animationDuration} ease`;

    if (isVisible) {
      textRef.current.style.maxHeight = '0';
      textRef.current.style.opacity = '0';
    } else {
      textRef.current.style.maxHeight = '200px';
      textRef.current.style.opacity = '1';
    }

    setIsVisible((prev) => !prev);
  }

  console.log(isVisible);

  return (
    <div>
      <button onClick={handleClick}>
        {isVisible ? 'Hide text' : 'Show text'}
      </button>
      <input
        type="number"
        value={duration}
        min={0.1}
        step={0.1}
        max={10}
        style={{ marginLeft: '10px' }}
        onChange={(e) => {
          setDuration(e.target.value);
        }}
      />
      <p ref={textRef}>
        This is hidden text. Please press the button to hide or show it!
      </p>
    </div>
  );
}

export default ToggleText;

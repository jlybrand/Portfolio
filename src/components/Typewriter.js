import React, { useState, useEffect, useRef } from 'react'
import '../styles/typewriter.css'

function Typewriter({ text }) {
  const index = useRef(0);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    index.current = 0;
    setCurrentText('');
  }, [text]);

  useEffect(() => {
    if (index.current < text.length) {
      var timeoutId = setTimeout(() => {
        setCurrentText((val) => val + text.charAt(index.current));
        index.current += 1;
      }, 70);
    }

    return () => {
      clearTimeout(timeoutId);
    }
  }, [currentText, text]);


  return (<p className="type-text">{currentText}</p>)
}

export default Typewriter
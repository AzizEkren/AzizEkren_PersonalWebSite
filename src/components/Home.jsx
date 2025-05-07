import { useState, useEffect } from 'react';
import './Home.css';

function Home() {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const textArray = ['Computer Engineer', 'Coder', 'Mobile Developer'];
  const period = 2000;

  useEffect(() => {
    let ticker = setTimeout(() => {
      const i = loopNum % textArray.length;
      const fullText = textArray[i];

      if (isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length - 1));
      } else {
        setDisplayText(fullText.substring(0, displayText.length + 1));
      }

      
      if (isDeleting) {
        setTypingSpeed(prevSpeed => prevSpeed / 1.2);
      } else {
        setTypingSpeed(150);
      }

      
      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), period);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    }, typingSpeed);

    return () => clearTimeout(ticker);
  }, [displayText, isDeleting, loopNum, textArray, typingSpeed]);

  return (
    <div className="home-section">
      <header>
        <h1>Aziz Ekren</h1>
        <p className="dynamic-text">
          I'm <span className="highlight">{displayText}</span>
          <span className="cursor"></span>
        </p>
      </header>
    </div>
  );
}

export default Home; 
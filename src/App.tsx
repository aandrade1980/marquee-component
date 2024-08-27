import { useEffect, useState } from 'react';

import AndroidLogo from './assets/android-logo.svg';
import AdobeXdLogo from './assets/adobe-xd-logo.svg';
import GoogleLogo from './assets/google-icon-logo.svg';
import FacebookLogo from './assets/facebook-logo.svg';
import AppleLogo from './assets/apple-logo.svg';
import BMWLogo from './assets/bmw-logo.svg';

export default function App() {
  const [reverseAnimation, setReverseAnimation] = useState(false);
  const [isAnimationPaused, setIsAnimationPaused] = useState(false);

  const handleDoubleClick = () => setReverseAnimation(prev => !prev);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        setIsAnimationPaused(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="main__container">
      <h1>My Marquee</h1>
      <section className="enable-animation">
        <h2>Default Behavior</h2>

        <div
          className={`marquee ${reverseAnimation ? 'marquee-reverse' : ''} ${
            isAnimationPaused ? 'marquee-paused' : ''
          }`}
          onDoubleClick={handleDoubleClick}
        >
          <ul className="marquee__content">
            <li className=" marquee__item">
              <img src={AndroidLogo} alt="" loading="lazy" />
            </li>
            <li className=" marquee__item">
              <img src={AdobeXdLogo} alt="" loading="lazy" />
            </li>
            <li className=" marquee__item">
              <img src={GoogleLogo} alt="" loading="lazy" />
            </li>
            <li className=" marquee__item">
              <img src={FacebookLogo} alt="" loading="lazy" />
            </li>
            <li className=" marquee__item">
              <img src={AppleLogo} alt="" loading="lazy" />
            </li>
            <li className=" marquee__item">
              <img src={BMWLogo} alt="" loading="lazy" />
            </li>
          </ul>

          <ul aria-hidden="true" className="marquee__content">
            <div className=" marquee__item">
              <img src={AndroidLogo} alt="" loading="lazy" />
            </div>
            <div className=" marquee__item">
              <img src={AdobeXdLogo} alt="" loading="lazy" />
            </div>
            <div className=" marquee__item">
              <img src={GoogleLogo} alt="" loading="lazy" />
            </div>
            <div className=" marquee__item">
              <img src={FacebookLogo} alt="" loading="lazy" />
            </div>
            <div className=" marquee__item">
              <img src={AppleLogo} alt="" loading="lazy" />
            </div>
            <div className=" marquee__item">
              <img src={BMWLogo} alt="" loading="lazy" />
            </div>
          </ul>
        </div>
      </section>
    </div>
  );
}

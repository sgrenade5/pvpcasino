import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import HomePage from './pages/HomePage'
import WalletPage from './pages/WalletPage'
import ProfilePage from './pages/ProfilePage'
import WheelPage from './pages/WheelPage'
import PokerPage from './pages/PokerPage'

const App: React.FC = () => {
  useEffect(() => {
    const interBubble = document.querySelector<HTMLDivElement>('.interactive')!;
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(() => {
        move();
      });
    }

    window.addEventListener('mousemove', (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    });

    move();
  }, []);

  return (
    <Router>
      <div className="app-container">
        <div className="gradient-bg">
          <svg>
            <defs>
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                <feBlend in="SourceGraphic" in2="goo" operator="atop"/>
              </filter>
            </defs>
          </svg>
          <div className="gradients-container">
            <div className="g1"></div>
            <div className="g2"></div>
            <div className="g3"></div>
            <div className="g4"></div>
            <div className="g5"></div>
            <div className="interactive"></div>
          </div>
        </div>
        <div className="content">
          <NavigationBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/wallet" element={<WalletPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/wheel" element={<WheelPage />} />
            <Route path="/poker" element={<PokerPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App 
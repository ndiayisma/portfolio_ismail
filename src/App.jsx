import { useState, useEffect } from 'react'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './index.css'
import { Home } from './components/sections/Home'
import { About } from './components/sections/About'
import { Cursus } from './components/sections/Cursus'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'

function App() {
  const [count, setCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading completion after 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'} bg-black text-gray-300`}>
        <Navbar />
        <Home />
        <About />
        <Cursus />
        <Skills />
        <Projects />
      </div>
    </>
  );
}

export default App

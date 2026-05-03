import { useState, useEffect } from 'react'
import { LoadingScreen } from './components/LoadingScreen'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './index.css'

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
      
    </>
  );
}

export default App

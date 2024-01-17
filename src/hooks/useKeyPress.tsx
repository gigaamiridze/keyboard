import { useState, useEffect } from 'react';

const useKeyPress = () => {
  const [pressedKey, setPressedKey] = useState<string | null>(null);

  const handleKeyPress = (event: KeyboardEvent) => {
    setPressedKey(event.key);
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  useEffect(() => {
    if (pressedKey !== null) {
      setPressedKey(null);
    }
  }, [pressedKey]);

  return { pressedKey };
}

export default useKeyPress;

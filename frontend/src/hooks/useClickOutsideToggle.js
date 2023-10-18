import { useState, useEffect, useRef } from 'react';

const useClickOutsideToggle = () => {
  const ref = useRef(null);
  const [expanded, setExpanded] = useState(false);

  const handleEvent = event => {
    if (ref && ref.current && !ref.current.contains(event.target)) {
      setExpanded(false);
    };
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleEvent)
    document.addEventListener('touchstart', handleEvent)

    return () => {
      document.removeEventListener('mouseup', handleEvent)
      document.removeEventListener('touchstart', handleEvent)
    }
  }, []);

  return { ref, expanded, setExpanded };
};

export default useClickOutsideToggle;

import { useEffect } from 'react';

const useClickOutside = (ref, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    // Bind the event listener
    document.addEventListener('click', handleClickOutside);

    // Unbind the event listener on cleanup
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref, callback]);
};

export default useClickOutside;

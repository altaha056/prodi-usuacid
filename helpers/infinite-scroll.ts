import { useState, useEffect } from 'react';

const useInfiniteScroll = (callback: () => void, component: string): any => {
  const [isFetching, setIsFetching] = useState(false);

  const handleScroll = () => {
    const wrappedElement = document.getElementById(component);

    if (wrappedElement) {
      if (
        window.innerHeight + document.documentElement.scrollTop <
          wrappedElement.offsetHeight + 100 ||
        isFetching
      )
        return;
      setIsFetching(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    callback();
  }, [isFetching]);

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;

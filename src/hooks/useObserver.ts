import { useEffect, useRef, useState } from 'react';
import { CompanyInterface } from 'src/redux/Slice/types';

export const useObserver = (companies: CompanyInterface[]) => {
  const [visibleCompanies, setVisibleCompanies] = useState(30);

  const observerRef = useRef(null);

  useEffect(() => {
    const loadMoreCompanies = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        setVisibleCompanies((prev) => prev + 10);
      }
    };

    const observer = new IntersectionObserver(loadMoreCompanies, {
      threshold: 0.5,
    });

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }
  }, [companies]);
  return { observerRef, visibleCompanies };
};

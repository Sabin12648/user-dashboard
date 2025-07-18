import { useState, useEffect } from 'react';

type Layout = 'table' | 'card';

export const useLayout = () => {
  const [layout, setLayout] = useState<Layout>('table');

  useEffect(() => {
    const savedLayout = localStorage.getItem('user-dashboard-layout') as Layout;
    if (savedLayout && (savedLayout === 'table' || savedLayout === 'card')) {
      setLayout(savedLayout);
    }
  }, []);

  const changeLayout = (newLayout: Layout) => {
    setLayout(newLayout);
    localStorage.setItem('user-dashboard-layout', newLayout);
  };

  return { layout, changeLayout };
}; 
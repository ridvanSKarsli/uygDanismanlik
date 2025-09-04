import React, { useState, useEffect } from 'react';
import { UpOutlined } from '@ant-design/icons';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll pozisyonunu takip et
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // En üste scroll et
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className="scroll-to-top-button"
          onClick={scrollToTop}
          aria-label="En üste çık"
        >
          <UpOutlined />
        </button>
      )}
    </>
  );
};

export { ScrollToTop };

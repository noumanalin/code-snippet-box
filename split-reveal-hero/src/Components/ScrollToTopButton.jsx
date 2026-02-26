
import { ChevronUp } from 'lucide-react';

const ScrollToTopButton = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-8 right-3 z-50">
      <button
        onClick={scrollToTop}
        className="border border-gray-600 text-gray-600 p-2 rounded-xl mix-blend-different"
        aria-label="Scroll to top"
      >
        <ChevronUp />
      </button>
    </div>
  );
};

export default ScrollToTopButton;

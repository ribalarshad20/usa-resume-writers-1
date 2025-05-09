import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../molecules/NavBar";
import PromotionalBannerWithHoverForm from "../atoms/PromotionalBannerWithHoverForm";
import ZenDeskChatComponent from "../atoms/ZenDeskChat";

const MainLayout: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if screen is mobile size
    const checkMobileView = () => {
      setIsMobile(window.innerWidth < 768); // 768px is a common breakpoint for mobile
    };

    // Check on initial render
    checkMobileView();

    const handleScroll = () => {
      // Show banner when user scrolls down, hide when at the top
      if (window.scrollY > 100) {
        setShowBanner(true);
      } else {
        setShowBanner(false);
      }
    };

    // Add event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobileView);

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobileView);
    };
  }, []);

  return (
    <div className="w-full">
      <header className="sticky top-0 z-50 bg-white">
        <NavBar />
      </header>
      <main className="w-full overflow-y-auto">
        <Outlet />
      </main>

      {/* Promotional Side Banner - only show if not mobile and scrolled down */}
      {showBanner && !isMobile && (
        <PromotionalBannerWithHoverForm
          discountPercentage={20}
          actionText="SIGN UP HERE TO GET"
        />
      )}

      <div className="fixed bottom-4 right-4 z-50">
        <ZenDeskChatComponent />
      </div>
      <style>{`
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #67D794;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
          background: #67D794;
          border-radius: 16px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #67D794;
        }
        * {
          scrollbar-width: thin;
          scrollbar-color: #2F4376;
        }
      `}</style>
    </div>
  );
};

export default MainLayout;

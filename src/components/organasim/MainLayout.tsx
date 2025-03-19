import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";
import NavBar from "../molecules/NavBar";

const MainLayout: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#F2F5FF]">
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <NavBar />
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="md:hidden fixed bottom-4 right-4 z-50">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-full bg-blue-600 text-white shadow-lg"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <main
          className={`flex-1 overflow-y-auto transition-all duration-300 ease-in-out ${
            isSidebarOpen && !isMobile ? "ml-0" : "ml-0 w-full"
          } p-4 pb-16 scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-100`}
        >
          <div className="flex flex-col w-full pb-5">
            <Outlet />
          </div>
        </main>
      </div>

      <style>{`
        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          background: #f0f0f0;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
          background: #007bff;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #0056b3;
        }

        * {
          scrollbar-width: thin;
          scrollbar-color: #007bff #f0f0f0;
        }
      `}</style>
    </div>
  );
};

export default MainLayout;

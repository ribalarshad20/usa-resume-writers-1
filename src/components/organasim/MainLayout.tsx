// MainLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../molecules/NavBar";

const MainLayout: React.FC = () => {
  return (
    <div className="w-full">
      <header className="sticky top-0 z-50 bg-white">
        <NavBar />
      </header>
      <main className="w-full overflow-y-auto">
        <Outlet />
      </main>
      <style>{`
        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          background: #67D794;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
          background: #67D794;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #67D794;
        }
        * {
          scrollbar-width: thin;
          scrollbar-color: #67D794 #f0f0f0;
        }
      `}</style>
    </div>
  );
};

export default MainLayout;

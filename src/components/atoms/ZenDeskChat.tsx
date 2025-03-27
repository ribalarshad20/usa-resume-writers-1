import React, { useEffect } from "react";

declare global {
  interface Window {
    zE?: (command: string, action: string) => void;
    zESettings?: {
      webWidget: {
        color: {
          theme: string;
          launcher: string;
          launcherText: string;
        };
        chat: {
          suppress: boolean;
        };
      };
    };
  }
}

interface ZenDeskChatProps {
  subdomain?: string;
  channelKey?: string;
}

const ZenDeskChatComponent: React.FC<ZenDeskChatProps> = ({
  channelKey = "cIq00n2OPTydNfzCMWlQfzb2ri6N8Eq5Sbmj2Trk",
}) => {
  useEffect(() => {
    // Prevent multiple script loads
    if (document.getElementById("ze-snippet")) return;

    // Configure ZenDesk settings before script load
    window.zESettings = {
      webWidget: {
        color: {
          theme: "#007bff", // Customizable theme color
          launcher: "#007bff",
          launcherText: "#FFFFFF",
        },
        chat: {
          suppress: false,
        },
      },
    };

    // Create and configure script
    const script = document.createElement("script");
    script.id = "ze-snippet";
    script.src = `https://static.zdassets.com/ekr/snippet.js?key=${channelKey}`;
    script.async = true;

    // Add error handling
    script.onerror = () => {
      console.error("ZenDesk chat script failed to load");
    };

    // Append script to document
    document.head.appendChild(script);

    // Initialize widget after script loads
    script.onload = () => {
      try {
        // Attempt to trigger widget initialization
        window.zE?.("webWidget", "show");
      } catch (error) {
        console.error("Error initializing ZenDesk widget:", error);
      }
    };

    // Cleanup function
    return () => {
      // Remove script and reset global variables
      try {
        document.head.removeChild(script);
        delete window.zE;
        delete window.zESettings;
      } catch (error) {
        console.error("Error during ZenDesk chat cleanup:", error);
      }
    };
  }, [channelKey]);

  return (
    <div
      id="zendesk-chat-container"
      className="fixed bottom-4 right-4 z-50"
      aria-label="Customer Support Chat"
    >
      {/* ZenDesk widget will be inserted here */}
    </div>
  );
};

export default ZenDeskChatComponent;

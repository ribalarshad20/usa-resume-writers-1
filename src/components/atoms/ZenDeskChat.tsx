import React, { useEffect, useState } from "react";

declare global {
  interface Window {
    zE?: (
      command: "messenger" | "messenger:on" | "messenger:set",
      action: string,
      ...args: (
        | string
        | number
        | (() => void)
        | { id: string; value: string | number | boolean }[]
        | undefined
      )[]
    ) => void;
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
  channelKey = "a7ac27e9-a042-494e-8a94-aa0b21408185",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if script is already loaded
    if (document.getElementById("ze-snippet")) {
      setIsLoaded(true);
      return;
    }

    // Zendesk widget settings
    window.zESettings = {
      webWidget: {
        color: {
          theme: "#007bff",
          launcher: "#007bff",
          launcherText: "#FFFFFF",
        },
        chat: {
          suppress: false,
        },
      },
    };

    // Create and load Zendesk script
    const script = document.createElement("script");
    script.id = "ze-snippet";
    script.src = `https://static.zdassets.com/ekr/snippet.js?key=${channelKey}`;
    script.async = true;

    script.onerror = () => {
      console.error("ZenDesk chat script failed to load");
      setIsLoaded(false);
    };

    document.head.appendChild(script);

    script.onload = () => {
      // Multiple attempts to ensure initialization
      const initializeZendesk = () => {
        try {
          if (window.zE) {
            setIsLoaded(true);

            // Open the messenger widget
            window.zE("messenger", "open");

            // Optional: Add event listeners
            window.zE("messenger:on", "open", () => {
              console.log("Zendesk messenger widget opened");
            });

            window.zE("messenger:on", "close", () => {
              console.log("Zendesk messenger widget closed");
            });
          } else {
            console.error("ZenDesk widget (zE) not found");
          }
        } catch (error) {
          console.error("Error initializing ZenDesk widget:", error);
        }
      };

      // Try initialization immediately and with a slight delay
      initializeZendesk();
      setTimeout(initializeZendesk, 1000);
    };

    // Cleanup function
    return () => {
      try {
        // Reset the widget before removing
        window.zE?.("messenger", "resetWidget", () => {
          document.head.removeChild(script);
          delete window.zE;
          delete window.zESettings;
        });
      } catch (error) {
        console.error("Error during ZenDesk chat cleanup:", error);
      }
    };
  }, [channelKey]);

  useEffect(() => {
    // Additional attempt to open widget if loaded
    if (isLoaded) {
      try {
        window.zE?.("messenger", "open");
      } catch (error) {
        console.error("Error opening ZenDesk messenger:", error);
      }
    }
  }, [isLoaded]);

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

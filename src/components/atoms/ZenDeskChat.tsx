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
  onClose?: () => void;
}

const ZenDeskChatComponent: React.FC<ZenDeskChatProps> = ({ onClose }) => {
  const [, setIsLoaded] = useState(false);
  const channelKey = "a7ac27e9-a042-494e-8a94-aa0b21408185";

  useEffect(() => {
    // Check if script is already loaded
    if (document.getElementById("ze-snippet")) {
      setIsLoaded(true);
      window.zE?.("messenger", "open");
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
              onClose?.(); // Call onClose prop when chat is closed
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
  }, [channelKey, onClose]);

  // Return null since the ZenDesk widget is loaded globally
  return null;
};

export default ZenDeskChatComponent;

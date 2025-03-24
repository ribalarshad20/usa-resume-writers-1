import React, { useRef } from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

interface TawkMessengerRef {
  minimize: () => void;
  // Add other methods if needed
}

const TawkChat: React.FC = () => {
  // Use the custom interface for the ref instead of any
  const tawkMessengerRef = useRef<TawkMessengerRef | null>(null);

  // Callback when the widget has loaded
  const onLoad = () => {
    console.log("Tawk.to chat loaded!");
  };

  return (
    <div className="w-full h-full">
      <TawkMessengerReact
        propertyId="67e1a453130bda19108f7ab7"
        widgetId="1in4mjpvg"
        ref={tawkMessengerRef}
        onLoad={onLoad}
      />
    </div>
  );
};

export default TawkChat;

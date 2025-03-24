import { forwardRef, useImperativeHandle, useRef } from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

interface TawkMessengerInstance {
  maximize: () => void;
  minimize: () => void;
}

export interface TawkChatRef {
  maximize: () => void;
  minimize: () => void;
}

type TawkChatProps = object; // Define an empty interface for props

const TawkChat = forwardRef<TawkChatRef, TawkChatProps>((_, ref) => {
  const tawkMessengerRef = useRef<TawkMessengerInstance | null>(null);

  const onLoad = () => {
    console.log("Tawk.to chat loaded!");
  };

  // Expose the maximize and minimize methods to the parent component
  useImperativeHandle(ref, () => ({
    maximize: () => {
      if (tawkMessengerRef.current) {
        tawkMessengerRef.current.maximize();
      }
    },
    minimize: () => {
      if (tawkMessengerRef.current) {
        tawkMessengerRef.current.minimize();
      }
    },
  }));

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
});

export default TawkChat;

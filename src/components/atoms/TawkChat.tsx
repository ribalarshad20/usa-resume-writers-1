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
        propertyId="67e4309111ddc719064a3139"
        widgetId="1in9lretl"
        ref={tawkMessengerRef}
        onLoad={onLoad}
      />
    </div>
  );
});

export default TawkChat;

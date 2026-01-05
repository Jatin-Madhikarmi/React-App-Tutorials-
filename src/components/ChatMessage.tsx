interface ChatMessageProps {
  message: string;
  sender?: string;
  timestamp?: number; // The '?' means this prop is optional
}

function ChatMessage({ message, sender }: ChatMessageProps) {
  //   const message = props.message;
  //   const sender = props.sender;
  //   const { message } = props;

  //   if (sender === "robot") {
  //     return (
  //       <div>
  //         <img src="./src/assets/react.svg" alt="" />
  //         {message}
  //       </div>
  //     );
  //}
  return (
    <div>
      {sender === "robot" && <img src="./src/assets/react.svg" />}
      {message}
      {sender === "user" && <img src="./src/assets/react.svg" />}
    </div>
  );
}

export default ChatMessage;

interface ChatMessagesProps {
  messages: { message: string; sender: string; id: string }[];
}

function ChatMessage({ messages }: ChatMessagesProps) {
  return (
    <>
      {messages.map((chatMessage) => (
        <div key={chatMessage.id} className={`message ${chatMessage.sender}`}>
          {chatMessage.sender === "robot" && (
            <img src="./src/assets/react.svg" />
          )}
          <span>{chatMessage.message}</span>
          {chatMessage.sender === "user" && (
            <img src="./src/assets/react.svg" />
          )}
        </div>
      ))}
    </>
  );
}

export default ChatMessage;

// function ChatMessage({ messages }: ChatMessagesProps) {
//   return (
//     <>
//       {messages.map((chatMessage) => (
//         <div key={chatMessage.id} className={`message ${chatMessage.sender}`}>
//           {chatMessage.sender === "robot" && (
//             <img src="./src/assets/react.svg" alt="robot" />
//           )}
//           <span>{chatMessage.message}</span>
//           {chatMessage.sender === "user" && (
//             <img src="./src/assets/react.svg" alt="user" />
//           )}
//         </div>
//       ))}
//     </>
//   );
// }

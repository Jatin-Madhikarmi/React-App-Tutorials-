// interface ChatMessageProps {
//   message: string;
//   sender?: string;
//   id?: string; // The '?' means this prop is optional
// }
import { useState } from "react";

function ChatMessage() {
  const [chatMessages, setChatMessages] = useState([
    {
      message: "Hello ChatBox",
      sender: "user",
      id: "id1",
    },
    {
      message: "Hello! How can I help you",
      sender: "robot",
      id: "id2",
    },
    {
      message: "Can you get me today's date",
      sender: "user",
      id: "id3",
    },
    {
      message: "Today is Januray 5 2026",
      sender: "robot",
      id: "id4",
    },
    {
      message: "Thank You!",
      sender: "user",
      id: "id5",
    },
  ]);

  //   const chatMessages = array[0];
  //   const setChatMessages = array[1];
  //   const [chatMessages, setChatMessages] = array;
  function sendMessage() {
    setChatMessages([
      ...chatMessages,
      {
        message: "test",
        sender: "user",
        id: crypto.randomUUID(),
      },
    ]);
  }

  return (
    <>
      <button onClick={sendMessage}>Send Message</button>
      {chatMessages.map((chatMessage) => (
        <div key={chatMessage.id} className={`message ${chatMessage.sender}`}>
          {chatMessage.sender === "robot" && (
            <img src="./src/assets/react.svg" alt="robot" />
          )}
          <span>{chatMessage.message}</span>
          {chatMessage.sender === "user" && (
            <img src="./src/assets/react.svg" alt="user" />
          )}
        </div>
      ))}
    </>
  );
}

export default ChatMessage;

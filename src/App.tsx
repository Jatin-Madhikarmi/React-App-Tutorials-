import { useState } from "react";
import ChatMessage from "./components/ChatMessage";
import ChatInput from "./components/ChatInput";

function App() {
  const [chatMessages, setChatMessages] = useState([
    { message: "Hello ChatBox", sender: "user", id: "id1" },
    { message: "Hello! How can I help you", sender: "robot", id: "id2" },
    { message: "Can you tell me today's date?", sender: "user", id: "id3" },
    { message: "Today is 6 Januray 2026", sender: "robot", id: "id4" },
    { message: "Thanks", sender: "user", id: "id5" },
  ]);

  function handleSend(text: string) {
    console.log("Message recevied in the parent process", text);
    setChatMessages([
      ...chatMessages,
      {
        message: text,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ]);
  }

  return (
    <>
      <ChatInput onSend={handleSend} />
      <ChatMessage messages={chatMessages} />
    </>
  );
}

export default App;

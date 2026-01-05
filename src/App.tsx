import ChatInput from "./components/ChatInput";
import ChatMessage from "./components/ChatMessage";
import HelloUser from "./components/HelloMsg";

function App() {
  return (
    <>
      <HelloUser />
      <ChatInput />
      <ChatMessage message="Hello chatbox" sender="user" />
      <ChatMessage message="Hello! How can I help you?" sender="robot" />
      <ChatMessage message="Can you get me today's date?" sender="user" />
      <ChatMessage message="Today is Janurau 5 2026" sender="robot" />
      <ChatMessage message="Thanks" sender="user" />
    </>
  );
}

export default App;

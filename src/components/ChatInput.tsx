import { type ChangeEvent } from "react";
import { useState } from "react";

function ChatInput() {
  const [inputText, setInputText] = useState("");

  function saveInputText(event: ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    setInputText(event.target.value);
  }

  function sendMessage() {
    console.log(inputText);
  }
  return (
    <>
      <input
        placeholder="Enter a message to ChatBox"
        size={30}
        onChange={saveInputText}
      />
      <button onClick={sendMessage}>Send</button>
    </>
  );
}

export default ChatInput;

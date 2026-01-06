import { type ChangeEvent } from "react";
import { type MouseEvent } from "react";
import { useState } from "react";

interface ChatInputProps {
  onSend: (text: string) => void;
}
function ChatInput({ onSend }: ChatInputProps) {
  const [inputText, setInputText] = useState("");
  function buttonClicked(event: MouseEvent<HTMLButtonElement>) {
    if (inputText.trim() !== "") {
      onSend(inputText); // Send the data back up to the parent
      console.log("The message is send to the parent functions", inputText);
      setInputText(""); // Clear the input after sending
    }
    console.log(event);
  }
  function textEntered(event: ChangeEvent<HTMLInputElement>) {
    setInputText(event.target.value);
  }
  return (
    <>
      <input placeholder="Enter your text here" onChange={textEntered} />
      <button onClick={buttonClicked}>Send</button>
    </>
  );
}

export default ChatInput;

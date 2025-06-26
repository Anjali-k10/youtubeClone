import { useEffect, useState } from "react";
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [LiveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessagesPop = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(addMessage({ 
        name: generateRandomName(),
        message: makeRandomMessage()
      }));
    }, 250);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="flex flex-col h-full border border-gray-700 rounded-lg bg-[#1f1f1f]">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-scroll p-3 custom-scrollbar">
        {chatMessagesPop.map((m, index) => (
          <ChatMessage
            key={index}
            name={m.name}
            message={m.message}
          />
        ))}
      </div>

      {/* Input Area */}
      <form
        className="flex items-center border-t border-gray-600 p-2"
        onSubmit={(e) => {
          e.preventDefault();
          if (!LiveMessage.trim()) return;
          dispatch(addMessage({ name: "Anjali", message: LiveMessage }));
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          value={LiveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          placeholder="Chat..."
          className="flex-1 px-3 py-2 rounded-md bg-[#2c2c2c] text-white focus:outline-none"
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 rounded-md text-white"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;


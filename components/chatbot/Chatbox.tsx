// Chatbot.tsx
import { useState } from "react";

interface ChatbotProps {
  onClose: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<{ user: string; bot: string }[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (input.trim() === "") return; 
    setMessages((prev) => [...prev, { user: input, bot: "" }]);
    
    try {
      const response = await fetch("D:\Project\TYF-NEW\EXE201\app\api\gemini\gemini-chat.ts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();


      setMessages((prev) => {
        const lastUserMessage = prev[prev.length - 1]; 
        return [
          ...prev.slice(0, -1), 
          { user: lastUserMessage.user, bot: data.reply }, 
        ];
      });
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        { user: "", bot: "Sorry, I encountered an error." },
      ]);
    } finally {
      setInput(""); 
    }
  };

  return (
    <>
      <div className="messages mb-4" style={{ maxHeight: "300px", overflowY: "auto" }}>
        {messages.map((msg, index) => (
          <div key={index} className="flex items-start mb-4">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
              alt="user avatar"
              className="w-11 h-auto"
            />
            <div className="p-3 ml-3 bg-blue-200 rounded-xl">
              <p className="text-sm mb-0">{msg.user}</p>
            </div>
          </div>
        ))}
        {messages.map((msg, index) => (
          <div key={index} className="flex justify-end mb-4">
            <div className="p-3 mr-3 border border-gray-300 bg-gray-50 rounded-xl">
              <p className="text-sm mb-0">{msg.bot}</p>
            </div>
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
              alt="bot avatar"
              className="w-11 h-auto"
            />
          </div>
        ))}
      </div>
      <div className="form-outline">
        <textarea
          className="form-control bg-gray-100 rounded-md border border-gray-300 p-2 w-full"
          rows={4}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (sendMessage(), e.preventDefault())}
          placeholder="Type your message"
        ></textarea>
      </div>
    </>
  );
};

export default Chatbot;
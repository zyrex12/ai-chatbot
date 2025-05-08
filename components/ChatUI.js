import { useState } from 'react';
import axios from 'axios';

export default function ChatUI() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    const res = await axios.post("/api/chat", { message: input });
    const botMessage = { from: "bot", text: res.data.reply };
    setMessages((prev) => [...prev, botMessage]);
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto">
      <div className="bg-gray-800 rounded-lg p-4 h-[500px] overflow-y-auto mb-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-2 ${msg.from === "user" ? "text-right" : "text-left"}`}
          >
            <span className="block bg-gray-700 p-2 rounded-md inline-block">
              {msg.text}
            </span>
          </div>
        ))}
        {loading && <p className="text-center">Mengetik...</p>}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="flex-grow p-2 rounded-l-md bg-gray-700 text-white"
          placeholder="Ketik pesan..."
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 px-4 rounded-r-md text-white"
        >
          Kirim
        </button>
      </div>
    </div>
  );
}

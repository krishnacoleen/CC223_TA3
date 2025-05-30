import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './App.css';
import tupLogo from './tup.png';

const SUGGESTIONS = [
  "Uniform Policy",
  "Transfer of Students",
  "Admission Requirements"
];

function App() {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hi there! I'm your TUPM UniBot. Ask me about uniforms, transfers, admission, or anything from the student handbook!",
      suggestions: SUGGESTIONS
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatRef = useRef(null);

  const scrollToBottom = () => {
    chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (text) => {
  if (!text.trim()) return;

  setMessages((prev) => [...prev, { sender: 'user', text }]);
  setLoading(true);
  setInput('');

  try {
    const res = await axios.post('https://tupm-student-handbook-chatbot.onrender.com/ask', {
      question: text
    });

    setMessages((prev) => [
      ...prev,
      {
        sender: 'bot',
        text: res.data.answer
      }
    ]);
  } catch (err) {
    console.error(err);
    setMessages((prev) => [
      ...prev,
      { sender: 'bot', text: 'Something went wrong. Please try again.' }
    ]);
  }

  setLoading(false);
};


  const handleSend = () => sendMessage(input);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestionClick = (text) => sendMessage(text);

  return (
    <div className="chat-container">
      <div className="chat-header">
        <div className="header-left">
          <img src={tupLogo} alt="TUP Logo" className="tup-logo" />
          <h2>ChatTUP</h2>
        </div>
      </div>

      <div className="chat-body" ref={chatRef}>
        {messages.map((msg, idx) => (
          <div key={idx} className={`chat-message ${msg.sender}`}>
            <div className="bubble">{msg.text}</div>
            {msg.suggestions && (
              <div className="quick-actions">
                {msg.suggestions.map((s, i) => (
                  <button key={i} className="quick-btn" onClick={() => handleSuggestionClick(s)}>
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
        {loading && (
          <div className="chat-message bot">
            <div className="bubble">Typing...</div>
          </div>
        )}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Ask me something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={handleSend} disabled={!input.trim() || loading}>
          Send
        </button>
      </div>
    </div>
  );
}

export default App;

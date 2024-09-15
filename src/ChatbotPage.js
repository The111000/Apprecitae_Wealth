import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './ChatbotPage.css';
const getChatbotResponse = async (message) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const lowercaseMessage = message.toLowerCase();
  if (lowercaseMessage.includes('apple')) {
    return "Apples are rich in fiber and antioxidants. They come in various colors and are great for snacking or baking.";
  } else if (lowercaseMessage.includes('banana')) {
    return "Bananas are high in potassium and provide quick energy. They're perfect for smoothies or as a pre-workout snack.";
  } else if (lowercaseMessage.includes('orange')) {
    return "Oranges are packed with vitamin C and have a refreshing taste. They're commonly used for juicing or eaten as a whole fruit.";
  } else if (lowercaseMessage.includes('grape')) {
    return "Grapes come in various colors and are rich in antioxidants. They're great for snacking or making wine.";
  } else if (lowercaseMessage.includes('strawberry')) {
    return "Strawberries are low in calories but high in vitamin C and fiber. They're delicious on their own or in desserts.";
  } else {
    return "I'm sorry, I don't have information about that fruit. Can you ask me about apples, bananas, oranges, grapes, or strawberries?";
  }
};

export default function ChatbotPage() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = { text: inputMessage, sender: 'user' };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      const response = await getChatbotResponse(inputMessage);
      const botMessage = { text: response, sender: 'bot' };
      setMessages(prevMessages => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error getting chatbot response:', error);
      const errorMessage = { text: 'Sorry, I encountered an error. Please try again.', sender: 'bot' };
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    }

    setIsTyping(false);
  };

  return (
    <div className="chatbot-container">
      <h1 className="chatbot-title">Fruit.ai Chatbot</h1>
      <div className="chatbot-card">
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.text}
            </div>
          ))}
          {isTyping && <div className="message bot typing">Typing...</div>}
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={handleSendMessage} className="chat-input-form">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Ask about a fruit..."
            className="chat-input"
          />
          <button type="submit" className="send-button">Send</button>
        </form>
      </div>
      <Link to="/home" className="back-link">
        Back to Home
      </Link>
    </div>
  );
}
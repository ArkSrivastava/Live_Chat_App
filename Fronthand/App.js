import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import './App.css'; // Import the combined CSS file

// Connect to the backend server
const socket = io("http://localhost:5001");

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // Listen for incoming messages
  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log("Received message:", data); // Debug log
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    // Cleanup on unmount
    return () => {
      socket.off("receive_message");
    };
  }, []);

  // Log messages state updates
  useEffect(() => {
    console.log("Messages updated:", messages); // Debug log
  }, [messages]);

  // Send a message
  const sendMessage = () => {
    if (message.trim()) {
      const data = {
        message: message,
        id: socket.id, // Include the sender's socket ID
      };
      socket.emit("send_message", data); // Send the message to the server
      setMessage("");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="chat-app">
          <h1 className="chat-header">Live Chat App</h1>
          <div className="chat-container">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.id === socket.id ? "user" : "other"}`}
              >
                <strong>{msg.id === socket.id ? "You" : "User"}: </strong>
                {msg.message}
              </div>
            ))}
          </div>
          <div className="input-container">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
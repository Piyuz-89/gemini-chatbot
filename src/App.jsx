import Home from "./components/Home"
import { GoogleGenerativeAI } from "@google/generative-ai";
import './App.css';

function App() {
  return (
  <>
    <Home />
  </>
  )
}

// import React, { useState } from 'react';

// // Message component for rendering individual messages
// const Message = ({ text, sender }) => (
//   <div style={{ margin: '5px', background: sender === 'bot' ? '#f0f0f0' : '#e6f7ff', padding: '10px' }}>
//     <strong>{sender === 'bot' ? 'Bot:' : 'User:'}</strong> {text}
//   </div>
// );

// const Chatbox = ({ messages }) => (
//   <div style={{ border: '1px solid #ccc', padding: '10px', minHeight: '150px' }}>
//     {messages.map((message, index) => (
//       <Message key={index} {...message} />
//     ))}
//   </div>
// );

// const App = () => {
//   const [messages, setMessages] = useState([]);

//   const genAI = new GoogleGenerativeAI("AIzaSyAH7_Ng3-4XpnwQDZPNXaAsqMA4N_D977s");

//   const addNewMessage = (text, sender) => {
//     const newMessage = { text, sender };
//     setMessages([...messages, newMessage]);
//   };

//   const handleUserInput = async (userInput) => {
//     // Assume a simple bot response for demonstration purpose
//     const model = genAI.getGenerativeModel({ model: "gemini-pro"});
//     const result = await model.generateContent(userInput);
//     const response = await result.response;
//     const text = response.text();
//     console.log(text);
//     const botResponse = `Bot received: ${text}`;
//     addNewMessage(botResponse, 'bot');
//   };

//   return (
//     <div>
//       <Chatbox messages={messages} />
//       <input
//         type="text"
//         placeholder="Type your message..."
//         onKeyDown={(e) => {
//           if (e.key === 'Enter') {
//             const userInput = e.target.value;
//             addNewMessage(userInput, 'user');
//             handleUserInput(userInput);
//             e.target.value = '';
//           }
//         }}
//       />
//     </div>
//   );
// };

// export default ChatApp;


export default App ;



import React, { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';
import { NavLink } from 'react-router-dom'

const roomCategories = {
  FirstYear: ["FE"],
  Computer: ["SEcomp", "TEcomp", "BEcomp"],
  Civil: ["SEcivil", "TEcivil", "BEcivil"],
  Mechanical: ["SEmech", "TEmech", "BEmech"],
  AIDS: ["SEaids", "TEaids", "BEaids"],
  ENTC: ["SEentc", "TEentc", "BEentc"],
  Electrical: ["SEelectrical", "TEelectrical", "BEelectrical"],
  IT: ["SEit", "TEit", "BEit"],
  Hackathons: ["Hackathons"],
  Competitions: ["Competitions"],
};

const SolveDoubts = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState({});
  const [currentRoom, setCurrentRoom] = useState('');
  const [message, setMessage] = useState('');
  const [socketId, setSocketId] = useState('');
  const messagesEndRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [file, setFile] = useState(null);

  useEffect(() => {
    const newSocket = io('http://localhost:3000', { withCredentials: true });
    setSocket(newSocket);

    newSocket.on('connect', () => {
      setSocketId(newSocket.id);
    });

    newSocket.on('receive-message', ({ room, message }) => {
      setMessages(prevMessages => ({
        ...prevMessages,
        [room]: [...(prevMessages[room] || []), message],
      }));
    });

    newSocket.on('previous-messages', ({ room, messages }) => {
      setMessages(prevMessages => ({
        ...prevMessages,
        [room]: messages,
      }));
    });

    return () => newSocket.disconnect();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const joinRoom = (room) => {
    if (currentRoom) {
      socket.emit('leave-room', currentRoom);
    }
    socket.emit('join-room', room);
    setCurrentRoom(room);
  };

  const leaveRoom = () => {
    if (currentRoom) {
      socket.emit('leave-room', currentRoom);
      setCurrentRoom('');
      setMessages((prevMessages) => ({
        ...prevMessages,
        [currentRoom]: [],
      }));
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (message.trim() && currentRoom) {
      const msgData = { room: currentRoom, message: { text: message, sender: socketId } };
      socket.emit('message', msgData);
      setMessage('');
    }

    // Handle file upload
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        const fileMessage = {
          text: data.fileUrl, // Use the file URL as the message text
          sender: socketId,
        };
        socket.emit('message', { room: currentRoom, message: fileMessage });
      }

      setFile(null); // Reset file input after sending
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">EngiLearn Chat Rooms</h1>
      </header>
      
      <div className="flex flex-col md:flex-row flex-grow">
        {/* Sidebar for Category and Room Selection */}
        <div className="w-full md:w-1/4 bg-gray-200 p-4 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4">Select Your Branch To Chat</h2>
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setCurrentRoom(''); // Reset current room on category change
            }}
            className="mb-4 p-2 border rounded w-full"
          >
            <option value="">-- Select Category --</option>
            {Object.keys(roomCategories).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          
          {selectedCategory && (
            <>
              <h2 className="text-xl font-semibold mb-4">Available Rooms</h2>
              {roomCategories[selectedCategory].map((room) => (
                <button
                  key={room}
                  onClick={() => joinRoom(room)}
                  className={`w-full text-left p-2 mb-2 rounded ${
                    currentRoom === room
                      ? 'bg-blue-500 text-white'
                      : 'bg-white hover:bg-gray-100'
                  }`}
                >
                  {room}
                </button>
              ))}
            </>
          )}
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">
              {currentRoom ? `Current Room: ${currentRoom}` : 'Select a room'}
            </h2>
            {currentRoom && (
              <button
                onClick={leaveRoom}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Leave Room
              </button>
            )}
          </div>

          {/* Message display area */}
          <div className="flex flex-col bg-white border rounded-lg p-4 flex-grow mb-4">
            {currentRoom &&
              messages[currentRoom]?.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-2 ${msg.sender === socketId ? 'text-right' : 'text-left'}`}
                >
                  {msg.text.startsWith('http') ? (
                    <img
                      src={msg.text}
                      alt="Uploaded"
                      className={`inline-block p-2 rounded-lg ${
                        msg.sender === socketId
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200'
                      } max-w-xs`}
                    />
                  ) : (
                    <span
                      className={`inline-block p-2 rounded-lg ${
                        msg.sender === socketId
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200'
                      }`}
                    >
                      {msg.text}
                    </span>
                  )}
                </div>
              ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Message input area */}
          <form onSubmit={sendMessage} className="flex flex-col sm:flex-row">
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="mb-2 sm:mb-0 sm:mr-2"
              disabled={!currentRoom}
            />
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 border rounded-t-lg sm:rounded-l-lg sm:rounded-t-none focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 sm:mb-0"
              disabled={!currentRoom}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-b-lg sm:rounded-r-lg sm:rounded-b-none hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={!currentRoom}
            >
              Send
            </button>
          </form>
        </div>
        <NavLink to='/aibot' className="fixed bottom-4 right-4 z-50 w-16 h-16 md:w-24 md:h-24 bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden hover:scale-110 transition-transform duration-300 ease-in-out">
              <img
                src="https://st5.depositphotos.com/4226061/73051/v/450/depositphotos_730516270-stock-illustration-robot-head-speech-bubble-blue.jpg?height=96&width=96"
                alt="Floating Logo"
                width={96}
                height={96}
                className="w-12 h-12 md:w-20 md:h-20 object-cover"
              />
            </NavLink>
      </div>

      <footer className="bg-gray-200 p-2 text-center">
        <p className="text-sm text-gray-600">YOUR ID: {socketId}</p>
      </footer>
    </div>
  );
};

export default SolveDoubts;

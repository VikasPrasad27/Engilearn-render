import React, { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';

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
  Compeditions: ["Compeditions"],
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
        [room]: [...(prevMessages[room] || []), message]
      }));
    });

    newSocket.on('previous-messages', ({ room, messages }) => {
      setMessages(prevMessages => ({
        ...prevMessages,
        [room]: messages
      }));
    });

    return () => newSocket.disconnect();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
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
      setMessages(prevMessages => ({
        ...prevMessages,
        [currentRoom]: []
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
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">EngiLearn Chat Rooms</h1>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <div className="w-1/4 bg-gray-200 p-4 overflow-y-auto">
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
            {Object.keys(roomCategories).map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          {selectedCategory && (
            <>
              <h2 className="text-xl font-semibold mb-4">Available Rooms</h2>
              {roomCategories[selectedCategory].map(room => (
                <button
                  key={room}
                  onClick={() => joinRoom(room)}
                  className={`w-full text-left p-2 mb-2 rounded ${currentRoom === room ? 'bg-blue-500 text-white' : 'bg-white hover:bg-gray-100'}`}
                >
                  {room}
                </button>
              ))}
            </>
          )}
        </div>
        <div className="flex-1 flex flex-col p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">
              {currentRoom ? `Current Room: ${currentRoom}` : "Select a room"}
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
          <div className="flex-1 bg-white border rounded-lg p-4 overflow-y-auto mb-4">
            {currentRoom && messages[currentRoom]?.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 ${msg.sender === socketId ? 'text-right' : 'text-left'}`}
              >
                {msg.text.startsWith('http') ? (
                  <img src={msg.text} alt="Uploaded" className={`inline-block p-2 rounded-lg ${msg.sender === socketId ? 'bg-blue-500 text-white' : 'bg-gray-200'} max-w-xs`} />
                ) : (
                  <span className={`inline-block p-2 rounded-lg ${msg.sender === socketId ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                    {msg.text}
                  </span>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={sendMessage} className="flex">
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="mr-2"
              disabled={!currentRoom}
            />
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={!currentRoom}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={!currentRoom}
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <footer className="bg-gray-200 p-2 text-center">
        <p className="text-sm text-gray-600">YOUR ID: {socketId}</p>
      </footer>
    </div>
  );
};

export default SolveDoubts;

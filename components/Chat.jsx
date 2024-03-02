'use client';

import { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessages([...messages, text]);
    setText('');
  };

  return (
    <div className="min-h-[calc(100vh-6rem)] grid grid-rows-[1fr_auto]">
      <div>
        <h2 className="text-5xl">Messages</h2>
      </div>
      <form onSubmit={handleSubmit} className="max-w-41 pt-12">
        <div className="join w-full gap-4">
          <input
            type="text"
            placeholder="Message GPT"
            className="input input-bordered join-item w-full"
            value={text}
            required
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="btn btn-primary px-6 rounded-none join-item"
            type="submit"
          >
            Ask
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;

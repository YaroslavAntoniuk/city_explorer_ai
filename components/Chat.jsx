'use client';

import { generateChatResponse } from '@/utils/actions';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import Message from './Message';

const Chat = () => {
  const messagesRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const { mutate: createMessage, isPending } = useMutation({
    mutationFn: (query) => generateChatResponse([...messages, query]),
    onSuccess: (data) => {
      if (!data) {
        toast.error('Failed to generate response...');
        return;
      }
      setMessages((prev) => [...prev, data]);
    },
  });

  useEffect(() => {
    // Scroll to the last message when messages update
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const query = { role: 'user', content: text };
    setMessages((prev) => [...prev, query]);
    createMessage(query);
    setText('');
  };

  return (
    <div className="min-h-[calc(100vh-6rem)] grid grid-rows-[1fr_auto]">
      <div
        ref={messagesRef}
        className="px-6 overflow-scroll no-scrollbar max-h-[70vh]"
      >
        {messages.map(({ role, content }, index) => (
          <Message key={index} role={role} content={content} />
        ))}
        {isPending && (
          <div className="flex p-6 -mx-8 text-lg leading-loose border-b border-base-300">
            <span className="mr-4">🤖</span>
            <span className="loading"></span>
          </div>
        )}
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
            disabled={isPending}
            type="submit"
          >
            {isPending ? 'Asking...' : 'Ask'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;

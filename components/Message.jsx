const Message = ({ role, content }) => {
  const avatar = role === 'user' ? '👤' : '🤖';
  const bgColor = role === 'user' ? 'bg-base-200' : 'bg-base-100';

  return (
    <div
      className={`${bgColor} flex p-6 -mx-8 text-lg leading-loose border-b border-base-300`}
    >
      <span className="mr-4">{avatar}</span>
      <p className="max-w-3xl">{content}</p>
    </div>
  );
};

export default Message;

import defaultProfile  from '../assets/defaultProfile.png';
const ChatMessage = ({ name, message, profileIcon }) => {
  return (
    <div className="flex items-start space-x-2">
      <img
        src={defaultProfile}
        alt="user"
        className="w-8 h-8 rounded-full"
      />
      <div>
        <p className="text-sm font-semibold text-blue-400">{name}</p>
        <div className="bg-gray-700 text-sm px-3 py-1 rounded-lg max-w-xs">
          {message}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;


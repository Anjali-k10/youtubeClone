import { useState } from "react";
import UserEmoji from "./UserEmoji";
import CommentList from "./CommentList";

const formatTimeAgo = (timestamp) => {
  if (!timestamp) return "Just now";
  const now = new Date();
  const diffMs = now - new Date(timestamp);
  const diffMins = Math.floor(diffMs / 60000);
  if (diffMins < 1) return "Just now";
  if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? "s" : ""} ago`;
  const diffHrs = Math.floor(diffMins / 60);
  if (diffHrs < 24) return `${diffHrs} hour${diffHrs > 1 ? "s" : ""} ago`;
  const diffDays = Math.floor(diffHrs / 24);
  return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
};

const Comment = ({ data, level, addReply }) => {
  const { name, text, replies, timestamp } = data;
  const [showReplies, setShowReplies] = useState(false);
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyText, setReplyText] = useState("");

  const handleAddReply = () => {
    if (replyText.trim() === "") return;
    addReply(replyText, data);
    setReplyText("");
    setShowReplyInput(false);
    setShowReplies(true);
  };

  const UserIcon = () => <UserEmoji />;

  return (
    <div
      className="flex gap-3 py-4 text-white w-full"
      style={{ marginLeft: `${level * 20}px` }}
    >
      <UserIcon />

      <div className="flex flex-col w-full">
        <p className="font-semibold text-sm">
          @{name}{" "}
          <span className="text-xs text-gray-400 ml-1">
            {formatTimeAgo(timestamp)}
          </span>
        </p>
        <p className="text-sm text-white mb-2">{text}</p>

        <div className="flex items-center gap-6 text-gray-400 text-sm">
          <button className="hover:text-white">👍 5</button>
          <button className="hover:text-white">👎</button>
          <button
            className="hover:text-white font-semibold"
            onClick={() => {
              setShowReplyInput(!showReplyInput);
            }}
          >
            Reply
          </button>
        </div>

        {showReplyInput && (
          <div className="mt-2">
            <input
              type="text"
              placeholder="Write a reply..."
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              className="bg-transparent border border-gray-600 rounded-md px-3 py-1 w-full text-white placeholder-gray-400 focus:outline-none"
            />
            <div className="mt-1 flex gap-2">
              <button
                className="text-sm text-blue-400 font-semibold hover:underline"
                onClick={handleAddReply}
              >
                Submit
              </button>
              <button
                className="text-sm text-gray-400 hover:text-white"
                onClick={() => setShowReplyInput(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {replies?.length > 0 && (
          <>
            {!showReplies ? (
              <button
                className="text-sm text-blue-400 mt-2 w-fit flex items-center gap-1 border border-blue-400 rounded px-2 py-0.5
                  hover:bg-blue-500 hover:text-white cursor-pointer transition-colors"
                onClick={() => setShowReplies(true)}
                aria-label="Show replies"
              >
                {replies.length} {replies.length === 1 ? "reply" : "replies"} ▼
              </button>
            ) : (
              <button
                className="text-sm text-blue-400 mt-2 w-fit flex items-center gap-1 border border-blue-400 rounded px-2 py-0.5
                  hover:bg-blue-500 hover:text-white cursor-pointer transition-colors"
                onClick={() => setShowReplies(false)}
                aria-label="Hide replies"
              >
                Hide replies ▲
              </button>
            )}

            {showReplies && (
              <div className="mt-3">
                <CommentList
                  comments={replies}
                  level={level + 1}
                  addReply={addReply}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Comment;

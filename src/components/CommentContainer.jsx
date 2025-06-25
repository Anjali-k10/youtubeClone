import { useState } from "react";

const UserEmoji = () => (
  <span role="img" aria-label="user" className="text-xl select-none mt-1">
    👤
  </span>
);

const Comment = ({ data, level, addReply }) => {
  const { name, text, replies } = data;
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
          <span className="text-xs text-gray-400 ml-1">2 months ago</span>
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

const CommentList = ({ comments, level = 0, addReply }) => {
  return comments.map((comment, i) => (
    <Comment key={i} data={comment} level={level} addReply={addReply} />
  ));
};

const CommentContainer = () => {
  const [commentsData, setCommentsData] = useState([
    {
      name: "Anjali",
      text: "This is a great video!",
      replies: [
        {
          name: "Anjali",
          text: "Agreed! Very well said!",
          replies: [],
        },
        {
          name: "Anjali",
          text: "Exactly, I loved it too!",
          replies: [
            {
              name: "Anjali",
              text: "Right?",
              replies: [],
            },
            {
              name: "Anjali",
              text: "Best part was the ending!",
              replies: [
                {
                  name: "Anjali",
                  text: "Yes yes!",
                  replies: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Anjali",
      text: "Very inspiring video!",
      replies: [],
    },
  ]);

  const addReply = (replyText, parentComment) => {
    const newReply = {
      name: "You",
      text: replyText,
      replies: [],
    };

    const recursiveAdd = (comments) =>
      comments.map((comment) => {
        if (comment === parentComment) {
          return {
            ...comment,
            replies: [...comment.replies, newReply],
          };
        } else if (comment.replies.length > 0) {
          return {
            ...comment,
            replies: recursiveAdd(comment.replies),
          };
        } else {
          return comment;
        }
      });

    setCommentsData((prev) => recursiveAdd(prev));
  };

  return (
    <div className="bg-black text-white mt-8 px-4 sm:px-6 py-6 w-full overflow-x-hidden">
      <h1 className="text-xl font-bold mb-6">147 Comments</h1>

      {/* Add Comment UI (optional) */}
      <div className="flex items-start gap-3 mb-8">
        <UserEmoji />
        <input
          type="text"
          placeholder="Add a comment..."
          className="bg-transparent border-b border-gray-600 focus:outline-none w-full text-white placeholder-gray-400 py-2"
        />
      </div>

      <CommentList comments={commentsData} addReply={addReply} />
    </div>
  );
};

export default CommentContainer;







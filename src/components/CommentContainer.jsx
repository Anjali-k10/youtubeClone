import { useState } from "react";
import { useSelector } from "react-redux";
import CommentList from "./CommentList";
import UserEmoji from "./UserEmoji";

const formatCommentCount = (count) => {
  if (count >= 1_000_000) return (count / 1_000_000).toFixed(1) + "M";
  if (count >= 1_000) return (count / 1_000).toFixed(1) + "K";
  return count.toString();
};

const CommentContainer = () => {
  const numberComments = useSelector(
    (store) => store.video.statistics?.commentCount
  );

  const [commentsData, setCommentsData] = useState([
    {
      name: "Anjali",
      text: "This is the first default comment!",
      timestamp: new Date(Date.now() - 1000 * 60 * 60), // 1 hour ago
      replies: [
        {
          name: "Anjali",
          text: "First reply to first comment",
          timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
          replies: [],
        },
        {
          name: "Anjali",
          text: "Second reply to first comment",
          timestamp: new Date(Date.now() - 1000 * 60 * 10), // 10 minutes ago
          replies: [],
        },
      ],
    },
    {
      name: "Anjali",
      text: "This is the second default comment!",
      timestamp: new Date(Date.now() - 1000 * 60 * 120), // 2 hours ago
      replies: [],
    },
  ]);

  const [newCommentText, setNewCommentText] = useState("");
  const [totalComments, setTotalComments] = useState(
    numberComments || commentsData.length
  );

  const handleAddComment = () => {
    if (newCommentText.trim() === "") return;

    const newComment = {
      name: "Anjali",
      text: newCommentText,
      replies: [],
      timestamp: new Date(),
    };

    setCommentsData((prev) => [newComment, ...prev]);
    setNewCommentText("");
    setTotalComments((count) => count + 1);
  };

  const addReply = (replyText, parentComment) => {
    const newReply = {
      name: "Anjali",
      text: replyText,
      replies: [],
      timestamp: new Date(),
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
    setTotalComments((count) => count + 1);
  };

  return (
    <div className="bg-black text-white mt-8 px-4 sm:px-6 py-6 w-full overflow-x-hidden">
      <h1 className="text-xl font-bold mb-6">
        {formatCommentCount(totalComments)} Comments
      </h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddComment();
        }}
        className="flex items-start gap-3 mb-8"
      >
        <UserEmoji />
        <input
          type="text"
          placeholder="Add a comment..."
          className="bg-transparent border-b border-gray-600 focus:outline-none w-full text-white placeholder-gray-400 py-2"
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
        />
        <button type="submit" className="text-blue-400 font-semibold ml-2">
          Comment
        </button>
      </form>

      <CommentList comments={commentsData} addReply={addReply} />
    </div>
  );
};

export default CommentContainer;









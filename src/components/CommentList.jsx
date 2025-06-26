import Comment from "./Comment";

const CommentList = ({ comments, level = 0, addReply }) => {
  return comments.map((comment, i) => (
    <Comment key={i} data={comment} level={level} addReply={addReply} />
  ));
};

export default CommentList;

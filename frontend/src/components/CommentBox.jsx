import { useState } from "react";
import API from "../api/axios";

function CommentBox({ postId, fetchPosts }) {
  const [text, setText] = useState("");

  const addComment = async () => {
    if (!text.trim()) return;

    try {
      await API.post(`/posts/comment/${postId}`, {
        text,
      });

      setText("");
      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Write a comment..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={addComment}>
        Comment
      </button>
    </div>
  );
}

export default CommentBox;
import { useState } from "react";
import API from "../api/axios";
import CommentBox from "./CommentBox";

function PostCard({ post, fetchPosts }) {
  const [showComments, setShowComments] = useState(false);

  const handleLike = async () => {
    try {
      await API.put(`/posts/like/${post._id}`);
      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="post-card">
      <h3>{post.user?.name}</h3>

      <p>{post.text}</p>

      {post.image && (
        <img
          src={post.image}
          alt="Post"
          className="post-image"
        />
      )}

      <div className="post-actions">
        <button onClick={handleLike}>
          ❤️ {post.likes.length} Likes
        </button>

        <button
          onClick={() =>
            setShowComments(!showComments)
          }
        >
          💬 {post.comments.length} Comments
        </button>
      </div>

      {showComments && (
        <>
          <CommentBox
            postId={post._id}
            fetchPosts={fetchPosts}
          />

          <div className="comments-list">
            {post.comments.map((comment) => (
              <div
                key={comment._id}
                className="comment"
              >
                <strong>
                  {comment.username}
                </strong>

                <p>{comment.text}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default PostCard;
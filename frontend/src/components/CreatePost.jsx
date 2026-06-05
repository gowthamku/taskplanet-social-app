import { useState } from "react";
import api from "../api/axios";

function CreatePost({ fetchPosts }) {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const formData = new FormData();

      formData.append("text", text);

      if (image) {
        formData.append("image", image);
      }

      await api.post("/posts", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setText("");
      setImage(null);

      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="create-post-form"
      onSubmit={handleSubmit}
    >
      <h2>Create Post</h2>

      <textarea
        placeholder="What's on your mind?"
        value={text}
        onChange={(e) =>
          setText(e.target.value)
        }
      />

      <div className="post-actions">
        <label className="upload-btn">
          📷
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setImage(e.target.files[0])
            }
            hidden
          />
        </label>

        <button type="submit">
          Post
        </button>
      </div>

      {image && (
        <p className="image-name">
          {image.name}
        </p>
      )}
    </form>
  );
}

export default CreatePost;
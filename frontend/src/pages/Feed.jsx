import { useEffect, useState } from "react";
import api from "../api/axios";

import "../styles/Feed.css";

import CreatePost from "../components/CreatePost";
import PostCard from "../components/PostCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await api.get("/posts");
      setPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="feed">
        <h1>TaskPlanet Social App</h1>

        <div className="create-post">
          <CreatePost fetchPosts={fetchPosts} />
        </div>

        <div className="posts">
          {posts.map((post) => (
            <PostCard
              key={post._id}
              post={post}
              fetchPosts={fetchPosts}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Feed;
import { useState, useEffect } from "react";
import { CommentCreate } from "./CommentCreate";
import { CommentList } from "./CommentList";
import axios from "axios";

export const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const { data } = await axios.get("http://localhost:5002/posts");

    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
        key={post.id}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
        </div>
        <CommentList comments={post.comments} />
        <CommentCreate postId={post.id} />
      </div>
    );
  });

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};

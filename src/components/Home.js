import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BLOG_API_URL}/posts`)
      .then(({ data }) => setPosts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {posts.map(post => (
        <li key={post._id}>{post.title}</li>
      ))}
    </div>
  );
};

export default Home;

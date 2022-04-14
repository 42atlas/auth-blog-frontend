import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loading from './Loading';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`${process.env.REACT_APP_BLOG_API_URL}/posts`);
        setPosts(data);
        setLoading(false);
      } catch (error) {
        toast.error('Something went wrong 😔. Please come back later');
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <Loading />;
  return (
    <div className='container mt-5'>
      <div className='row'>
        {posts.map(post => (
          <div key={post._id} className='col-md-4 mb-4'>
            <div className='card'>
              <img src={post.image} className='card-img-top' style={{ objectFit: 'cover', height: '10rem' }} alt={post.title} />
              <div className='card-body text-center'>
                <h5 className='card-title '>{post.title}</h5>
                <h6 className='card-subtitle '>By: {post.author.name}</h6>
                <Link to={`/post/${post._id}`} className='mt-4 btn btn-primary btn-sm'>
                  More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

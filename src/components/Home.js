import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loading from './Loading';
import Alert from './Alert';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_BLOG_API_URL}/posts`)
      .then(({ data }) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Something went wrong, sorry 😔');
        setTimeout(() => setError(null), 3000);
        setLoading(false);
      });
  }, []);

  if (error) return <Alert error={error} type='danger' />;
  if (loading) return <Loading />;
  return (
    <div className='container mt-5'>
      <div className='row'>
        {posts.map(post => (
          <div key={post._id} className='col-md-4 mb-4'>
            <div className='card'>
              <img
                src={post.image}
                className='card-img-top'
                style={{ objectFit: 'cover', height: '10rem' }}
                alt={post.title}
              />
              <div className='card-body text-center'>
                <h5 className='card-title '>{post.title}</h5>
                <Link to={`/post/${post._id}`} className='btn btn-primary btn-sm'>
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

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loading from './Loading';

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`${process.env.REACT_APP_BLOG_API_URL}/posts/${id}`);
        setPost(data);
        setLoading(false);
      } catch (error) {
        toast.error(error.response?.data.error || error.message);
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) return <Loading />;
  return post ? (
    <div>
      <div className='row'>
        <img src={post.image} alt={post.title} style={{ height: '15vw', objectFit: 'cover' }} />
      </div>
      <div className='container mt-5'>
        <div className='row'>
          <h1 className='text-center'>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      </div>
    </div>
  ) : (
    'Nothing to show... 😔'
  );
};

export default SinglePost;

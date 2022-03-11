import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from './Loading';
import Alert from './Alert';

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_BLOG_API_URL}/posts/${id}`)
      .then(({ data }) => {
        setPost(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Something went wrong, sorry 😔');
        setTimeout(() => setError(null), 3000);
        setLoading(false);
      });
  }, [id]);

  if (error) return <Alert error={error} type='danger' />;
  if (loading) return <Loading />;
  return post ? <div>{post.title}</div> : 'Nothing to show... 😔';
};

export default SinglePost;

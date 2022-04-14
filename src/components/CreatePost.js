import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const CreatePost = () => {
  const navigate = useNavigate();
  const [{ title, author, image, body }, setFormState] = useState({
    title: '',
    image: '',
    body: ''
  });

  const handleInputChange = e => setFormState(prev => ({ ...prev, [e.target.id]: e.target.value }));

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      if (!title || !image || !body) return alert('All fields are required');
      const data = JSON.stringify({ title, author, image, body });
      const { data: newPost } = await axios.post(`${process.env.REACT_APP_BLOG_API_URL}/posts`, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      navigate(`/post/${newPost._id}`);

      setFormState({
        title: '',
        image: '',
        body: ''
      });
    } catch (error) {
      toast.error(error.response?.data.error || error.message);
    }
  };

  return (
    <div className='container mt-5'>
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <div className='col-md-6'>
            <div className='mb-3'>
              <label htmlFor='title' className='form-label'>
                Title
              </label>
              <input type='text' className='form-control' id='title' value={title} onChange={handleInputChange} />
            </div>
          </div>
          <div className='col-md-6'>
            <div className='mb-3'>
              <label htmlFor='image' className='form-label'>
                Image
              </label>
              <input type='text' className='form-control' id='image' value={image} onChange={handleInputChange} />
            </div>
          </div>
          <div className='col-12'>
            <div className='mb-3'>
              <label htmlFor='body' className='form-label'>
                Body
              </label>
              <textarea className='form-control' id='body' value={body} onChange={handleInputChange} />
            </div>
          </div>

          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;

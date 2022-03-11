import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import About from './components/About';
import SinglePost from './components/SinglePost';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='new-post' element={<CreatePost />} />
        <Route path='post/:id' element={<SinglePost />} />
        <Route path='about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;

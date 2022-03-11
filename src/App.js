import { Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<div>All posts</div>} />
        <Route path='new-post' element={<div>Create post</div>} />
        <Route path='about' element={<div>About</div>} />
      </Route>
    </Routes>
  );
};

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Users from './Users';
import UserPage from './UserPage';
import UserPost from './Userpost';
import UserAlbum from './useralbum';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="/users/:id/post" element={<UserPost />} />
        <Route path="/users/:id/album" element={<UserAlbum />} />
      </Routes>
    </Router>
  );
}

export default App;

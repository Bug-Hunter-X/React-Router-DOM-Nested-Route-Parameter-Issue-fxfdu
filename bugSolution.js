```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/:id" element={<About />} />
        <Route path="/users/:userId/profile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home</h1>;
}

function About() {
  let { id } = useParams();
  return <h1>About {id}</h1>;
}

function UserProfile() {
  let { userId } = useParams();
  return <h1>User Profile: {userId}</h1>;
}
```
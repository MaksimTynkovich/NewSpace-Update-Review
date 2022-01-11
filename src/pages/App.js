import '../styles/App.css';
import HomePage from './HomePage';
import BlogPage from './blogPage';
import { Routes, Route, Navigate, BrowserRouter, Link, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react'
import TestPage from './TestPage';

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 

function App() {

  return (
    <div>
      <BrowserRouter>
      <Wrapper>
        <Routes>
        <Route index element={<HomePage />} />
          <Route path="BlogPage" element={<BlogPage />} />
          <Route path="TestPage" element={<TestPage />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
    </div>
  );
}

export default App;

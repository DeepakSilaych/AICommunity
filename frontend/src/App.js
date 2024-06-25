import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom"
import './App.css';
import Home from './pages/Home/Home.jsx';
import Blog from './pages/blogsHome/blog.jsx';
import Layout from './pages/Layout/Layout.jsx';
import Project from './pages/Project/project.jsx';
import BlogDetails from './pages/blogsHome/BlogDetails.jsx';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

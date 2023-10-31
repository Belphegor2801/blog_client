import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import BlogTable from './BlogTable';
import './blogtable.css';


// var data = require('./db-test.json');

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchBlogs = async () => {
    const response = await fetch("http://localhost:3001/api/blogs");
    const jsonData = await response.json();
    console.log(jsonData.data);
    setBlogs(jsonData.data);
    // setBlogs(data.blogs);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const filteredBlogs = blogs.filter((blog) => {
    return blog.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <form>
        <i><FaSearch /></i>
        <input 
            type="text" 
            placeholder="Search" 
            className="mr-sm-2" 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        
      </form>
      <BlogTable blogs={filteredBlogs} />
    </>
  );
};

export default BlogList;
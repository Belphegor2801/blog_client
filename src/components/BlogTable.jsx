import React from 'react';
import './blogtable.css';

const BlogTable = ({ blogs }) => {
  return (
    <div className='blog-grid'>
      {blogs.map((blog, index) => (
        <div className='blog-item'>
          <div className='blog-item-img '>
            <img src = {blog.image} alt="Không tìm thấy hình ảnh"/>
          </div>
          <div className='blog-item-title'>{blog.title}</div>
          <div className='blog-item-time'>{blog.createAt}</div>
          <div className='blog-item-body'>{blog.body}</div>
        </div>
        ))}
    </div>
  );
};

export default BlogTable;
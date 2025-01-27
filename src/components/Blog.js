import React from 'react';
import './styles/Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      image: '/assets/img_1.WEBP',
      date: 'FEBRUARY 26, 2018',
      title: 'Free Template by Colorlib',
    },
    {
      id: 2,
      image: '/assets/img_2.WEBP',
      date: 'FEBRUARY 26, 2018',
      title: 'Free Template by Colorlib',
    },
    {
      id: 3,
      image: '/assets/img_3.WEBP',
      date: 'FEBRUARY 26, 2018',
      title: 'Free Template by Colorlib',
    },
    {
      id: 4,
      image: '/assets/img_1.WEBP',
      date: 'FEBRUARY 26, 2018',
      title: 'Free Template by Colorlib',
    },
    {
      id: 5,
      image: '/assets/img_2.WEBP',
      date: 'FEBRUARY 26, 2018',
      title: 'Free Template by Colorlib',
    },
    {
      id: 6,
      image: '/assets/img_3.WEBP',
      date: 'FEBRUARY 26, 2018',
      title: 'Free Template by Colorlib',
    },
  ];

  const popularPosts = [
    {
      id: 1,
      image: '/assets/img_1.WEBP',
      date: 'FEBRUARY 27, 2018',
      title: 'Free Template by Colorlib',
    },
    {
      id: 2,
      image: '/assets/img_2.WEBP',
      date: 'FEBRUARY 27, 2018',
      title: 'Free Template by Colorlib',
    },
    {
      id: 3,
      image: '/assets/img_1.WEBP',
      date: 'FEBRUARY 27, 2018',
      title: 'Free Template by Colorlib',
    },
    {
      id: 4,
      image: '/assets/img_3.WEBP',
      date: 'FEBRUARY 27, 2018',
      title: 'Free Template by Colorlib',
    },
  ];

  const categories = [
    { name: 'Events', count: 12 },
    { name: 'Resto bar', count: 4 },
    { name: 'Celebration', count: 23 },
    { name: 'Promos', count: 8 },
  ];

  return (
    <div className="blog-container">
      <div className="blog-posts">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post">
            <img src={post.image} alt={post.title} />
            <p className="post-date">{post.date}</p>
            <h3 className="post-title">{post.title}</h3>
          </div>
        ))}
      </div>

      <div className="sidebar">
        <div className="search-box">
          <input type="text" placeholder="Search..." />
        </div>

        <div className="popular-posts">
          <h3>Popular Post</h3>
          {popularPosts.map((post) => (
            <div key={post.id} className="popular-post">
              <img src={post.image} alt={post.title} />
              <div>
                <p className="post-date">{post.date}</p>
                <h4 className="post-title">{post.title}</h4>
              </div>
            </div>
          ))}
        </div>

        <div className="categories">
          <h3>Categories</h3>
          <ul>
            {categories.map((category, index) => (
              <li key={index}>
                {category.name} <span>({category.count})</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blog;

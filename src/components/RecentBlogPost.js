import React from 'react';
import './styles/RecentBlogPost.css';


const RecentBlogPost = () => {
  const blogPosts = [
    {
      id: 1,
      date: 'FEBRUARY 26, 2018',
      title: '45 Best Places To Unwind',
      description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      image: './assets/img_1.webp'
    },
    {
      id: 2,
      date: 'FEBRUARY 26, 2018',
      title: '45 Best Places To Unwind',
      description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      image: './assets/img_2.webp'
    },
    {
      id: 3,
      date: 'FEBRUARY 26, 2018',
      title: '45 Best Places To Unwind',
      description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      image: './assets/img_3.webp'
    }
  ];

  return (
    <div className="blog-section">
      <h2 className="section-title">Recent Blog Post</h2>
      <p className="section-description">
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
        there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
        Semantics, a large language ocean.
      </p>
      <div className="blog-posts-grid">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post">
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <p className="blog-date">{post.date}</p>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-description">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogPost;

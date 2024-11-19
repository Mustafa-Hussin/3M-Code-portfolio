import React from 'react';
import { motion } from 'framer-motion';
import './pages.css';

const Articles = () => {
  const articles = [
    {
      title: "Modern Web Development Practices",
      date: "June 15, 2023",
      summary: "Exploring the latest trends and best practices in web development.",
      readTime: "5 min read"
    },
    {
      title: "React Performance Optimization",
      date: "May 28, 2023",
      summary: "Tips and tricks for improving your React application's performance.",
      readTime: "8 min read"
    },
    {
      title: "The Future of Frontend Development",
      date: "May 10, 2023",
      summary: "A look into upcoming technologies and frameworks in frontend development.",
      readTime: "6 min read"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="page-container"
    >
      <h1>Articles</h1>
      <div className="articles-grid">
        {articles.map((article, index) => (
          <motion.article
            key={index}
            className="article-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h2>{article.title}</h2>
            <div className="article-meta">
              <span>{article.date}</span>
              <span>{article.readTime}</span>
            </div>
            <p>{article.summary}</p>
            <button className="read-more">Read More</button>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
};

export default Articles;

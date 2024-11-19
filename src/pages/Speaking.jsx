import React from 'react';
import { motion } from 'framer-motion';
import './pages.css';

const Speaking = () => {
  const events = [
    {
      title: "Modern Web Development Conference 2023",
      date: "September 15, 2023",
      location: "San Francisco, CA",
      topic: "Building Scalable React Applications",
      description: "A deep dive into architecture patterns and best practices for large-scale React applications."
    },
    {
      title: "JavaScript Developer Meetup",
      date: "August 5, 2023",
      location: "Online",
      topic: "State Management in 2023",
      description: "Exploring modern state management solutions in React applications."
    },
    {
      title: "Tech Workshop Series",
      date: "July 20, 2023",
      location: "New York, NY",
      topic: "Frontend Performance Optimization",
      description: "Practical techniques for improving web application performance."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="page-container"
    >
      <h1>Speaking Events</h1>
      <div className="events-grid">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className="event-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="event-date">{event.date}</div>
            <h2>{event.title}</h2>
            <div className="event-location">{event.location}</div>
            <h3>{event.topic}</h3>
            <p>{event.description}</p>
            <button className="event-details">View Details</button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Speaking;

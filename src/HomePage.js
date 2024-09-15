import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const services = [
  { name: 'Chat', description: 'Personal chatbot for fruit information', icon: '💬', link: '/chat' },
  { name: 'Translator', description: 'Translate fruit names to regional languages', icon: '🌐', link: '/translator' },
  { name: 'FAQ', description: 'Frequently asked questions about fruits', icon: '❓', link: '/faq' },
  { name: 'About', description: 'Learn more about Fruit.ai', icon: 'ℹ️', link: '/about' },
];

export default function HomePage() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Fruit.ai</h1>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.name} className="card service-card">
            <h2 className="service-title">
              <span className="service-icon">{service.icon}</span>
              {service.name}
            </h2>
            <p className="service-description">{service.description}</p>
            <Link to={service.link} className="btn service-link">
              Go to {service.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <div className="about-container">
      <div className="card about-card">
        <h1 className="about-title">About Fruit.ai</h1>
        <div className="about-content">
          <p>
            Welcome to Fruit.ai, your ultimate destination for all things fruit-related! We are passionate about promoting healthy eating habits and increasing awareness about the wonderful world of fruits.
          </p>
          <p>
            Our mission is to provide easy access to comprehensive information about fruits, leveraging the power of artificial intelligence to deliver accurate and personalized content to our users.
          </p>
          <div className="about-features">
            <h2 className="feature-title">Our Features:</h2>
            <ul className="feature-list">
              <li><strong>AI Chatbot:</strong> Get instant answers to your fruit-related questions.</li>
              <li><strong>Fruit Translator:</strong> Learn fruit names in multiple languages.</li>
              <li><strong>Nutritional Information:</strong> Access detailed nutritional facts for various fruits.</li>
              <li><strong>Recipes:</strong> Discover delicious and healthy fruit-based recipes.</li>
              <li><strong>Growing Tips:</strong> Learn how to grow your own fruits at home.</li>
            </ul>
          </div>
          <p>
            Whether you're a fruit enthusiast, a health-conscious individual, or simply curious about nature's sweet offerings, Fruit.ai is here to satisfy your fruity curiosities!
          </p>
        </div>
        <Link to="/home" className="btn back-link">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
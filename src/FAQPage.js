import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FAQPage.css';

const faqs = [
  {
    question: "What is Fruit.ai?",
    answer: "Fruit.ai is an AI-powered platform that provides information about fruits, including nutritional facts, recipes, and growing tips."
  },
  {
    question: "How does the fruit chatbot work?",
    answer: "Our fruit chatbot uses advanced natural language processing to understand your questions and provide accurate information about various fruits."
  },
  {
    question: "Can I translate fruit names to other languages?",
    answer: "Yes, our translator feature allows you to translate fruit names into multiple languages, helping you learn about fruits from around the world."
  },
  {
    question: "Is the information on Fruit.ai reliable?",
    answer: "We strive to provide accurate and up-to-date information. Our content is regularly reviewed and updated by nutrition experts and horticulturists."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="card faq-card">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <span>{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <p className="faq-answer">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
        <Link to="/home" className="btn back-link">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
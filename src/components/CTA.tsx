import React, { useState, FormEvent } from 'react';
import * as styles from '../styles/cta.module.css';

const CTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Send email to backend or third-party service
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('Thank you for your interest! We will keep you updated.');
        setEmail('');
      } else {
        setMessage('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting email:', error);
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <section className={styles.cta}>
      <h2>{/* ... */}</h2>
      <p>{/* ... */}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Notify Me</button>
      </form>
      {message && <p className={styles.thankYouMessage}>{message}</p>}
    </section>
  );
};

export default CTA;

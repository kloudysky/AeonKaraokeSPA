import React from 'react';
import '../styles/footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Aeon Karaoke. All rights reserved.
      </p>
      <div className="social-media">
        <a href="#!">Facebook</a>
        <a href="#!">Instagram</a>
        <a href="#!">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;

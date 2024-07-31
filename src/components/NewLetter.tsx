import React from "react";
export const NewLetter = () => {
  return (
    <article className="newsletter-container">
      <div className="newletter-box">
        <h2 className="newsletter-title">Subscribe to Our Newsletter</h2>
        <p className="newsletter-description">
          Stay updated with the latest news. Enter your email to subscribe.
        </p>
        <form className="newsletter-form">
          <input
            type="email"
            id="email"
            placeholder="Enter your Email Address"
            className="newsletter-input"
            required
          />
          <button type="submit" className="newsletter-button">
            Subscribe
          </button>
        </form>
      </div>
    </article>
  );
};
export default NewLetter;

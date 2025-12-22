import React from 'react';
// import './index.css'; // we'll create this file for styles

const Card = () => {
  return (
    <div className="card-container">
        <div className="card">
          <div className="top">
            <span>$150/hr</span>
            <span className="bookmark">🔖</span>
          </div>

          <div className="title">
            Senior <br />
            Backend <br />
            Engineer
          </div>

          <div className="arrow">→</div>

          <div className="dots">
            <span className="dot"></span>
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>

        <div className="bottom">
          <div className="company">
            <div className="logo">G</div>
              <div className="company-name">Senior Backend Engineer</div>
              <div className="company-sub">Google</div>
            </div>
            <button className="btn">View</button>
          </div>
        </div>

    </div>
    
  );
};

export default Card;

import React from 'react';
import './UserProfileStats.css'; // Import the CSS file for styling

const UserProfileStats = ({ 
  username, 
  easySolved, 
  totalEasy, 
  mediumSolved, 
  totalMedium, 
  hardSolved, 
  totalHard, 
  totalSolved, 
  totalQuestions ,
  ranking
}) => {
  const easyPercent = (easySolved / totalQuestions) * 100;
  const mediumPercent = (mediumSolved / totalQuestions) * 100;
  const hardPercent = (hardSolved / totalQuestions) * 100;

  return (
    <div className="user-profile-stats">
      <div className="stats-container">
        <div className="circle-chart">
          <svg className="chart-svg" viewBox="0 0 180 180">
            <circle cx="90" cy="90" strokeWidth="8" r="70" className="circle-bg"></circle>
            <circle
              cx="90"
              cy="90"
              strokeWidth="8"
              r="70"
              className="circle-easy"
              strokeDasharray={`${easyPercent} ${100 - easyPercent}`}
            />
            <circle
              cx="90"
              cy="90"
              strokeWidth="8"
              r="70"
              className="circle-medium"
              strokeDasharray={`${mediumPercent} ${100 - mediumPercent}`}
              strokeDashoffset={`${easyPercent}`}
            />
            <circle
              cx="90"
              cy="90"
              strokeWidth="8"
              r="70"
              className="circle-hard"
              strokeDasharray={`${hardPercent} ${100 - hardPercent}`}
              strokeDashoffset={`${easyPercent + mediumPercent}`}
            />
          </svg>
          <div className="chart-info">
            <span className="info-title">All</span>
            <div className="info-total">{totalSolved}</div>
            <hr className="info-divider" />
            <div className="info-questions">{totalQuestions}</div>
          </div>
        </div>
        <br />
        <div>
        <div className="difficulty-card easy">
            <span className="difficulty-label">Ranking</span>
            <span className="difficulty-value" style={{ fontWeight: 'bold' }}>{ranking}</span>
        </div>

        </div>
        
        <h2 className="username">{username}</h2>
        <div className="difficulty-stats">
          <div className="difficulty-card easy">
            <span className="difficulty-label">Easy</span>
            <span className="difficulty-value">{easySolved}<span className="difficulty-total">/{totalEasy}</span></span>
          </div>
          <div className="difficulty-card medium">
            <span className="difficulty-label">Medium</span>
            <span className="difficulty-value">{mediumSolved}<span className="difficulty-total">/{totalMedium}</span></span>
          </div>
          <div className="difficulty-card hard">
            <span className="difficulty-label">Hard</span>
            <span className="difficulty-value">{hardSolved}<span className="difficulty-total">/{totalHard}</span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileStats;

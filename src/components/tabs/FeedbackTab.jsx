import React, { useState } from 'react';
import { Star } from 'lucide-react';
import InteractiveGrid from './InteractiveGrid';

const FeedbackTab = () => {
  const [userRating, setUserRating] = useState(() => {
    const savedRating = localStorage.getItem('portfolio_user_rating');
    return savedRating ? parseInt(savedRating, 10) : 0;
  });
  const [hoverRating, setHoverRating] = useState(0);

  const [feedbackCounts, setFeedbackCounts] = useState(() => {
    const saved = localStorage.getItem('portfolio_feedback');
    if (saved) return JSON.parse(saved);
    return { 5: 128, 4: 32, 3: 10, 2: 5, 1: 2 };
  });

  const [hasRated, setHasRated] = useState(() => {
    return localStorage.getItem('portfolio_has_rated') === 'true';
  });

  const handleRatingSubmit = (star) => {
    if (hasRated) return; // Prevent multiple ratings
    setUserRating(star);
    setHasRated(true);
    localStorage.setItem('portfolio_has_rated', 'true');
    localStorage.setItem('portfolio_user_rating', star.toString());
    
    const newCounts = { ...feedbackCounts, [star]: feedbackCounts[star] + 1 };
    setFeedbackCounts(newCounts);
    localStorage.setItem('portfolio_feedback', JSON.stringify(newCounts));
  };

  const totalRatings = Object.values(feedbackCounts).reduce((a, b) => a + b, 0);
  const feedbackStats = [5, 4, 3, 2, 1].map(stars => ({
    stars,
    count: feedbackCounts[stars],
    percentage: totalRatings === 0 ? 0 : Math.round((feedbackCounts[stars] / totalRatings) * 100)
  }));
  
  return (
    <div className="portfolio-container">
      <InteractiveGrid />
      <div className="feedback-layout">
        <div className="feedback-header">
          <h2 className="canvas-title" style={{fontSize: '48px', letterSpacing: '-1px', margin: 0}}>
            Rate Your <span className="canvas-highlight">Experience</span>.
          </h2>
          <p className="canvas-subtitle" style={{marginTop: '10px'}}>
            Your feedback helps me improve. Let me know what you think of my work!
          </p>
        </div>
        
        <div className="rating-section">
          <div className="stars-container">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                type="button"
                key={star}
                aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: hasRated ? 'default' : 'pointer',
                  opacity: (hasRated && userRating > 0 && userRating < star) ? 0.3 : 1
                }}
                disabled={hasRated}
                onMouseEnter={() => !hasRated && setHoverRating(star)}
                onMouseLeave={() => !hasRated && setHoverRating(0)}
                onClick={() => handleRatingSubmit(star)}
                className="star-btn"
              >
                <Star 
                  size={48}
                  className={`star-icon ${(hoverRating || userRating) >= star ? 'filled' : ''} ${hasRated ? 'disabled' : ''}`}
                />
              </button>
            ))}
          </div>
          <p className="rating-text">
            {hasRated ? (userRating > 0 ? `You rated ${userRating} star${userRating > 1 ? 's' : ''}! Thank you.` : 'You have already rated. Thank you!') : 'Hover and click to rate'}
          </p>
        </div>
        
        <div className="feedback-report">
          <h3 className="report-title">All-Time Feedback Report</h3>
          <div className="report-bars">
            {feedbackStats.map((stat) => (
              <div key={stat.stars} className="report-row">
                <div className="report-label">
                  {stat.stars} <Star size={12} className="small-star" />
                </div>
                <div className="report-bar-bg">
                  <div className="report-bar-fill" style={{ width: `${stat.percentage}%` }}></div>
                </div>
                <div className="report-count">{stat.count}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="footer-row">
        <div>PrimePixels@gmail.com</div>
        <div>+91 9571613261</div>
      </div>
    </div>
  );
};

export default FeedbackTab;

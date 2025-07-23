import React from 'react';

function StarRating({ rating, totalRatings  }) {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    const percent = Math.min(Math.max(rating - i, 0), 1) * 100;

    stars.push(
      <svg
        key={i}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        style={{ marginRight: 1 }}
      >
        <defs>
          <linearGradient id={`starGrad-${i}`}>
            <stop offset={`${percent}%`} stopColor="#3483FA" />
            <stop offset={`${percent}%`} stopColor="#ccc" />
          </linearGradient>
        </defs>
        <path
          fill={`url(#starGrad-${i})`}
          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 
             9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
        />
      </svg>
    );
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{ fontSize: '1.2rem', marginRight: '8px' }}>
        {rating.toFixed(1)}
      </span>
      {stars}
      <span style={{ fontSize: '1rem', color: '#555' }}>({totalRatings})</span>
    </div>
  );
}

export default StarRating;

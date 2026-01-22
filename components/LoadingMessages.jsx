import React from 'react'
import './LoadingMessages.css'
const LoadingMessages = () => {
  return (
    <div className='messages'>
      <div className="messages__left--side">
        
        <div className="skeleton-12 shimmer"></div>
        
      </div>
      <div className="messages__right--side here-12">
          <div className="skeleton-12 shimmer"></div>
          <div className="skeleton-12 shimmer"></div>
          <div className="skeleton-12 shimmer"></div>
          <div className="skeleton-12 shimmer"></div>
      </div>
    </div>
  )
}

export default LoadingMessages
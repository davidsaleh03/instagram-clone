import React from 'react'
import Footer from './Footer'
import './LoadingExplore.css'

const LoadingExplore = () => {
  return (
    <div className="Explore">
      <div className="explore__section">
        <figure className="explore__reel">
          <div className='skeleton-1 shimmer'></div>
        </figure>
        <div className="explore__section--posts ">
          <figure className="explore__photo" >
           <div className="skeleton-1 shimmer"></div>
          </figure>
          <figure className="explore__photo">
            <div className="skeleton-1 shimmer"></div>
          </figure>
          <figure className="explore__photo" >
            <div className="skeleton-1 shimmer"></div>
          </figure>
          <figure className="explore__photo" >
            <div className="skeleton-1 shimmer"></div>
          </figure>
        </div>
      </div>
      <div className="explore__section">
        <div className="explore__section--posts">
          <figure className="explore__photo" >
            <div className='skeleton-1 shimmer'></div>
          </figure>
          <figure className="explore__photo" >
            <div className='skeleton-1 shimmer'></div>
          </figure>
          <figure className="explore__photo">
            <div className='skeleton-1 shimmer'></div>
          </figure>
          <figure className="explore__photo">
            <div className='skeleton-1 shimmer'></div>
          </figure>
        </div>
        <figure className="explore__reel">
          <div className='skeleton-1 shimmer'></div>
        </figure>
      </div>
      <div className="explore__section">
        <figure className="explore__reel">
          <div className='skeleton-1 shimmer'></div>
        </figure>
        <div className="explore__section--posts ">
          <figure className="explore__photo" >
           <div className="skeleton-1 shimmer"></div>
          </figure>
          <figure className="explore__photo">
            <div className="skeleton-1 shimmer"></div>
          </figure>
          <figure className="explore__photo" >
            <div className="skeleton-1 shimmer"></div>
          </figure>
          <figure className="explore__photo" >
            <div className="skeleton-1 shimmer"></div>
          </figure>
        </div>
      </div>
      <Footer classTwo='opacity'/>
    </div>
  )
}

export default LoadingExplore
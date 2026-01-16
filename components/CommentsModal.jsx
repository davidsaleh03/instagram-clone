import React from 'react'

const CommentsModal = ({post, onClose}) => {
  return (
    <div className='CommentsModal'>
        <figure className="modal__left--side">
            <img src="" alt="" className="modal__left--img" />
        </figure>
        <div className="modal__right--side">
            <div className="modal__right--details">
                <div className="figure__modal--right">
                    <img src={post.image} alt="" className="figure__modal--img2" />
                </div>
            </div>
                {
                    post.comments.map((comment, index) => {
                        return <div className="comments__section" key={index}>
                            <figure className="comment__area--left">
                                <img src={comment.image} alt="" className="comment__left--img" />
                            </figure>
                            <div className="comment__area--right">
                                <div className="comment__right--top">
                                    <h1>{comment.username}</h1>
                                    <h1>{comment.caption}</h1>
                                </div>
                                <div className="comment__right--middle">
                                    <h1>{comment.likes}</h1>
                                    <h1 className='cursor-no'>Reply</h1>
                                </div>
                                <div className="comment__right--bottom">
                                    <h1 className='cursor-no'>View Replies</h1>
                                </div>
                            </div>
                        </div>
                    })
                }
        </div>
    </div>
  )
}

export default CommentsModal
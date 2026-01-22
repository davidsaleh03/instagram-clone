import React, { useEffect, useState } from 'react'
import './Messages.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import LoadingMessages from '../../components/LoadingMessages';

const Messages = () => {
const [loading, setLoading] = useState(true);

    useEffect(() => {
          const timer = setTimeout(() => {
            setLoading(false);
          }, 800);
          return () => clearTimeout(timer);
        }, []);
  if (loading) { return <LoadingMessages />; }
  return (
    <div className='messages'>
      <div className="messages__left--side">
        <div className="messages__left--middle">
<FontAwesomeIcon className='pentosquare' icon={faPenToSquare} />
<p>Chats will appear here after you send or receive a message</p>
        </div>
      </div>
      <div className="messages__right--side">
        <div className="messages__right--middle">
          <figure className="send__figure">
          <FontAwesomeIcon className='PaperPlane' icon={faPaperPlane} />
          </figure>
          <h1>Your messages</h1>
          <p>Send a message to start a chat.</p>
          <button className='Yourbtn cursor-no'>Send Message</button>
        </div>
      </div>
    </div>
  )
}

export default Messages
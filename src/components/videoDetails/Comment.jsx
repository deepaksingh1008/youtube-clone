import React from 'react'
import './comment.css'
import { BiLike, BiDislike } from "react-icons/bi";
const Comment = ({ c }) => {
    console.log('comment->', c)
    const { channelId, videoId, textDisplay, textOriginal, authorDisplayName, authorProfileImageUrl, authorChannelUrl }
        = c;
    return (
        <div className='comment-box'>
            <div className="author-profile" >
                <img src={authorProfileImageUrl ? authorProfileImageUrl : `https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png`} alt="author-image" />
            </div>
            <div className="comment-section">
                <div>{authorDisplayName}</div>
                <div>{textDisplay}</div>
                <div className='like-dislike'>
                    <span><BiLike /></span><span><BiDislike /></span><span>Reply</span>
                </div>
            </div>

        </div>
    )
}

export default Comment
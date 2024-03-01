import React from 'react'
import './card.css'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { useNavigate } from 'react-router-dom'
const VideoCard = ({ thumbnail, videoId, channelId, channelTitle, description, publishTime, publishedAt, title }) => {
    const navigate = useNavigate();
    return (
        <div className='card' onClick={() => navigate(`/video/${videoId}`)}>
            <div className="thumbnail">
                <img src={thumbnail} alt="thumbnail" />
            </div>
            <div className="dis">
                <p className="title">{title}</p>
                <p className='channel'><span>{channelTitle}</span><IoIosCheckmarkCircleOutline /></p>
                <p className='views'>Views</p>
            </div>

        </div>
    )
}

export default VideoCard
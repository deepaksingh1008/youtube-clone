import React from 'react'
import './videocard.css'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { useNavigate } from 'react-router-dom'
const VideoCrad = ({ thumbnail, videoId, channelId, channelTitle, description, publishTime, publishedAt, title }) => {
    const navigate = useNavigate();
    return (
        <div className='card-v' onClick={() => navigate(`/video/${videoId}`)}>
            <div className="thumbnail-v">
                <img src={thumbnail} alt="thumbnail" />
            </div>
            <div className="dis-v">
                <p className="title-v">{title}</p>
                <p className='channel-v'><span>{channelTitle}</span><IoIosCheckmarkCircleOutline /></p>
                <p className='views-v'>Views</p>
            </div>

        </div>
    )
}

export default VideoCrad
import React from 'react'
import './channel.css';
const Channel = ({ snippet, stats, brand }) => {
    console.log('brand section ->', snippet, stats, brand);
    const { image, channel } = brand;
    const { thumbnails, title, description, customUrl, publishedAt } = snippet;
    const { viewCount, subscriberCount, hiddenSubscriberCount, videoCount } = stats;
    console.log('image->', image.bannerExternalUrl)
    return (

        <>
            <div className='poster mar'>
                <img src={image.bannerExternalUrl} alt="cover-image" />
            </div>
            <hr />
            <div className='youtuber-profile mar'>
                <div className="pro-img">
                    <img src={thumbnails.medium.url} alt="profile-image" />
                </div>
                <div className="prof-detail">
                    <h3>{title}</h3>
                    <div><span>{customUrl}</span><span>{subscriberCount} Suscriber</span><span>{videoCount} videos</span></div>
                </div>
            </div>
            <hr />
            <div className='channel-info mar'>Info</div>
            <hr />
            <div className='channel-videos mar'>videos</div>
            <hr />
            <div className='profile-sec mar'>Profile</div>
        </>
    )
}

export default Channel
import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import './hero.css';
import { fetchFromApi } from '../../api-clients/fetchApi';

const Hero = () => {
    const [selectedCategory, setSelectedCategory] = useState('New');
    const [videos, setVideos] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => {
                //console.log(data);
                setVideos(data?.items)
                setLoading(false)
            })

    }, [selectedCategory]);

    return (
        <>
            <div className="hero">
                <div className='videos'>
                    {loading && <h1 style={{ color: 'black' }}>Loading...</h1>}
                    {

                        videos?.map((video, idx) => (
                            <VideoCard key={idx} thumbnail={video.snippet.thumbnails.default.url}
                                videoId={video.id.videoId}
                                channelId={video.snippet.channelId}
                                channelTitle={video.snippet.channelTitle}
                                description={video.snippet.description}
                                publishTime={video.snippet.publishTime}
                                publishedAt={video.snippet.publishedAt}
                                title={video.snippet.title}
                            />
                        ))

                    }
                </div>
            </div>
        </>
    )
}

export default Hero
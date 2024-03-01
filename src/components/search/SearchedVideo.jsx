import React, { useEffect, useState } from 'react'
import VideoCard from '../Hero/VideoCard'
import '../Hero/hero.css';
import { fetchFromApi } from '../../api-clients/fetchApi';
import { useParams } from 'react-router-dom'
import axios from 'axios'
const Hero = () => {
    const { searchTerm } = useParams();
    // console.log('search item = ', searchTerm)
    // const [selectedCategory, setSelectedCategory] = useState('New');
    const [videos, setVideos] = useState([])
    useEffect(() => {
        //    const {data} = axios.get(`https://youtube-v31.p.rapidapi.com/search?q=${searchTerm}&part=snippet,id&regionCode=US&maxResults=50&order=date
        //     `);

        const fetchData = async () => {
            try {
                const response = await axios.get(`https://youtube-v31.p.rapidapi.com/search?q=${searchTerm}&part=snippet,id&regionCode=US&maxResults=50&order=date`, {
                    headers: {
                        "X-RapidAPI-Key": "47929a282dmsha42c1a0c013cc1ap1ceafejsn878db518fd71",
                        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
                    },
                });
                setVideos(response?.data?.items);
            } catch (error) {
                console.log(error)
            }
        };

        fetchData();




    }, [searchTerm]);


    return (
        <>
            <div className="hero">
                <div className='videos'>
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
                    video
                </div>
            </div>
        </>
    )
}

export default Hero
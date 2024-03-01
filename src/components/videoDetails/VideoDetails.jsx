import React, { useEffect, useState } from 'react'
import './videodetails.css';
import ReactPlayer from 'react-player'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { BiSolidBellRing } from "react-icons/bi";
import { BiLike, BiDislike } from "react-icons/bi";
import { IoIosShareAlt, IoIosHeart } from "react-icons/io";
import { IoCut } from "react-icons/io5";
import { MdDownload } from "react-icons/md";
import { useParams, useNavigate } from 'react-router-dom'
import VideoCrad from './VideoCrad';
import { fetchFromApi } from '../../api-clients/fetchApi';
import Comment from './Comment';
const VideoDetails = () => {
    const { id } = useParams();
    const [videoDetails, setVideoDetails] = useState({});
    const [video, setReletedVideo] = useState([]);
    const [comment, setComment] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {

        fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
            .then((data) => {
                // console.log(data)
                setReletedVideo(data?.items)
            });
        fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
            .then((data) => {
                // console.log("data=>", data?.items[0]);
                setVideoDetails(data?.items[0])
            })
        fetchFromApi(`commentThreads?part=snippet&videoId=${id}`)
            .then((data) => {
                console.log("Data =>", data);
                setComment(data?.items)
            })
    }, [id])
    //afh9J6RSt_g
    const handleOnclick = (e, channelId) => {
        e.preventDefault();
        // if (!channelId) return;
        // navigate(`/channel/${channelId}`);
        navigate('/comming-soon')
    }
    return (
        <div className='video-details'>
            <div className="video-comment">
                <div className="video-setion">
                    <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls />
                </div>
                <div className="comment-section">
                    <div className="v-title">
                        <h3>{videoDetails?.snippet?.title}</h3>
                    </div>
                    <div className="v-suscribe">
                        <div className="profile-section">
                            <div className="suscribe-section">
                                <span style={{ display: "flex", alignItems: 'center', cursor: 'pointer' }}><span onClick={(e) => { handleOnclick(e, videoDetails?.snippet?.channelId) }}>{videoDetails?.snippet?.channelTitle}</span><IoIosCheckmarkCircleOutline /></span>
                                <span>{videoDetails?.statistics?.viewCount}</span>
                            </div>
                            <div className="suscribe-btn">
                                <button><BiSolidBellRing /> <span>Subscribe</span></button>
                            </div>
                        </div>
                        <div className="share-section">
                            <div><BiLike /> {videoDetails?.statistics?.likeCount} | <BiDislike /></div>
                            <div><IoIosShareAlt /> <span>Share</span></div>
                            <div><MdDownload /><span>Download</span></div>
                            <div><IoIosHeart /><span>Thanks</span></div>
                            <div><IoCut /><span>Clip</span></div>
                            <div style={{ alignItems: 'center' }}>...</div>
                        </div>
                    </div>
                    <div className="v-description">
                        {videoDetails?.snippet?.description}
                    </div>
                    <div className="v-comments">
                        <div>{videoDetails?.statistics?.commentCount} comments</div>
                        <div>
                            {comment?.map((com, idx) => (
                                <Comment key={idx} c={com.snippet.topLevelComment.snippet} />
                            ))}

                        </div>
                    </div>
                </div>
            </div>
            <div className="side-video">

                {
                    video?.map((video, idx) => (
                        <VideoCrad
                            key={idx}
                            thumbnail={video.snippet.thumbnails.default.url}
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
    )
}

export default VideoDetails
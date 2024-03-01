import React from 'react'
import './sidebar.css';
import { CiHome, CiMusicNote1 } from "react-icons/ci";
import { SiYoutubeshorts, SiYoutubegaming, SiYoutubemusic, SiYoutubestudio } from "react-icons/si";
import { MdSubscriptions, MdOutlineWatchLater, MdLocalMovies, MdOutlinePodcasts, MdOutlineSportsSoccer } from "react-icons/md";
import { GrChannel } from "react-icons/gr";
import { FaHistory, FaCut, FaShoppingBag, FaHackerNews, FaBookReader } from "react-icons/fa";
import { BiSolidVideos } from "react-icons/bi";
import { IoIosTrendingUp, IoIosHelpCircleOutline } from "react-icons/io";
import { RiLiveFill } from "react-icons/ri";
import { GiLoincloth } from "react-icons/gi";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { GoReport } from "react-icons/go";
import { VscFeedback } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='sidebar'>
                <div className="list">
                    <div>
                        <li className='list-1' onClick={() => navigate('/')}><CiHome /> <span>Home</span></li>
                        <li className='list-1' onClick={() => navigate('/comming-soon')}><SiYoutubeshorts /> <span>Shorts</span></li>
                        <li className='list-1' onClick={() => navigate('/comming-soon')}><MdSubscriptions /> <span>Subscription</span></li>
                    </div>
                    <hr />
                    <div>
                        <li className='list-1' onClick={() => navigate('/comming-soon')}><GrChannel /> <span>Your Channel</span></li>
                        <li className='list-1' onClick={() => navigate('/comming-soon')}><FaHistory /> <span>History</span></li>
                        <li className='list-1' onClick={() => navigate('/comming-soon')}><BiSolidVideos /><span>Your Videos</span> </li>
                        <li className='list-1' onClick={() => navigate('/comming-soon')}><MdOutlineWatchLater /><span>Watch later</span> </li>
                        <li className='list-1' onClick={() => navigate('/comming-soon')}><FaCut /><span>Yours Clips</span> </li>
                    </div>
                    <hr />
                    <div>
                        <li className='list-1' onClick={() => navigate('/comming-soon')}><IoIosTrendingUp /><span>Trending</span> </li>
                        <li className='list-1' onClick={() => navigate('/comming-soon')}><FaShoppingBag /><span>Shoping</span> </li>
                        <li className='list-1' onClick={() => navigate('/comming-soon')}><CiMusicNote1 /><span>Music</span></li>
                        <li className='list-1' onClick={() => navigate('/comming-soon')}><MdLocalMovies /><span>Movies</span></li>
                        <li className='list-1' onClick={() => navigate('/comming-soon')}><RiLiveFill /><span>Live</span></li>
                        <li className='list-1' onClick={() => navigate('/comming-soon')}><SiYoutubegaming /><span>Gaming</span></li>
                        <li className='list-1' onClick={() => navigate('/comming-soon')}><FaHackerNews /><span>News</span></li>
                        <li className='list-1' onClick={() => navigate('/comming-soon')}><MdOutlineSportsSoccer /><span>Sports</span></li>
                        <li className='list-1' onClick={() => navigate('/comming-soon')}><FaBookReader /><span>Learning</span></li>
                        <li className='list-1' onClick={() => navigate('/comming-soon')}><GiLoincloth /><span>Fashion & Beauty</span> </li>
                        <li className='list-1' onClick={() => navigate('/comming-soon')}><MdOutlinePodcasts /><span>Podcaste</span> </li>
                        <hr />
                    </div>
                    <div>
                        <li className='list-1' onClick={() => navigate('/comming-soon')}><TiSocialYoutubeCircular /><span>Youtube Premimum</span></li>
                        <li className='list-1' onClick={() => navigate('/comming-soon')}><SiYoutubemusic /><span>Youtube Music</span> </li>
                        <li className='list-1' onClick={() => navigate('/comming-soon')}><SiYoutubestudio /><span>Youtube Studio</span> </li>
                        <li className='list-1' onClick={() => navigate('/comming-soon')}><TbBrandYoutubeKids /><span>Youtube Kids</span> </li>
                        <hr />
                    </div>
                    <div>
                        <li className='list-1' onClick={() => navigate('/comming-soon')}><IoSettingsOutline /><span>Setting</span> </li>
                        <li className='list-1' onClick={() => navigate('/comming-soon')}><GoReport /><span>Report History</span> </li>
                        <li className='list-1' onClick={() => navigate('/comming-soon')}><IoIosHelpCircleOutline /><span>Help</span></li>
                        <li className='list-1' onClick={() => navigate('/comming-soon')}><VscFeedback /><span>Send Feedback</span></li>
                        <hr />
                    </div>
                </div>
                <div className='para'>
                    <p>AboutPressCopyrightContact usCreatorsAdvertiseDevelopers</p>
                    <p>TermsPrivacyPolicy & SafetyHow YouTube worksTest new features</p>
                    <p>© 2024 Google LLC</p>
                    <p>Create By Deepak Singh</p>
                </div>


            </div>
        </>
    )
}

export default Sidebar
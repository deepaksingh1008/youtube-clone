import React, { useState } from 'react'
import { FaSlidersH } from "react-icons/fa";
import Image from '../../assets/yt-logo-1.png'
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { MdPerson } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { MdOutlineEmergencyRecording } from "react-icons/md";
import { useNavigate } from 'react-router-dom'
export const Header = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    const handleSearch = (e) => {
        e.preventDefault();
        if (!search) return;
        navigate(`/search/${search}`);

    }
    return (
        <>
            <div className="header">
                <div className="icons">

                    <Link to='/'> <img src={Image} alt="" /></Link>
                    <h5>Youtube</h5>
                </div>
                <div className="search">
                    <div className='Search-bar' onKeyDown={(e) => {
                        if (e.code === 'Enter') {
                            handleSearch(e);
                        }
                    }}>
                        <input type="text" placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)}></input>
                    </div>
                    <div className='svg'>
                        <CiSearch onClick={handleSearch} />
                    </div>



                </div>
                <div className="profile">
                    <MdOutlineEmergencyRecording />
                    <IoMdNotifications />
                    <MdPerson />
                </div>
            </div>
        </>
    )
}

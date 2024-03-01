import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import SearchedVideo from './SearchedVideo'
const SearchFeed = () => {
    return (
        <>
            <div className="main-1">
                <div className='div1'>
                    <Sidebar />
                </div>
                <div className='div2'>
                    <SearchedVideo />
                </div>
            </div>
        </>
    )
}

export default SearchFeed
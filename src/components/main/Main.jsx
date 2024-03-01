import React from 'react'
import { Header } from '../Headers/Header'
import Sidebar from '../sidebar/Sidebar'
import Hero from '../Hero/Hero'
export const Main = () => {
    return (
        <>
            <div className="main">
                {/* <Header /> */}
                <div className="main-1">
                    <div className='div1'>
                        <Sidebar />
                    </div>
                    <div className='div2'>
                        <Hero />
                    </div>
                </div>
            </div>
        </>
    )
}

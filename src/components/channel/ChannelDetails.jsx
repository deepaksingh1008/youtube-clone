import React, { useEffect, useState } from 'react'
import Sidebar from '../sidebar/Sidebar';
import Channel from './Channel';
import { useParams } from 'react-router-dom'
import { fetchFromApi } from '../../api-clients/fetchApi';
export const ChannelDetails = () => {
    const { id } = useParams();
    const [channelDetail, setChannelDetail] = useState();
    console.log('channel id ->', id);
    useEffect(() => {
        fetchFromApi(`channels?part=snippet,statistics&id=${id}`)
            .then((data) => {
                console.log("channel data 1 => ", data);
                setChannelDetail(data?.items[0]);
            })

    }, [id])
    return (
        <>

            <div className="main-1">
                <div className='div1'>
                    <Sidebar />
                </div>
                <div className='div2'>
                    <Channel
                        snippet={channelDetail?.snippet}
                        stats={channelDetail?.statistics}
                        brand={channelDetail?.brandingSettings
                        }
                    />
                </div>
            </div>

        </>
    )
}


export default ChannelDetails;
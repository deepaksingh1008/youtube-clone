import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Main } from './components/main/Main'
import { Header } from './components/Headers/Header'
import VideoDetails from './components/videoDetails/VideoDetails'
import SearchFeed from './components/search/SearchFeed'
import ChannelDetails from './components/channel/ChannelDetails'
import CommingSoon from './components/CommingSoon'
function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/video/:id' element={<VideoDetails />} />
          <Route path='/channel/:id' element={<ChannelDetails />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
          <Route path='/comming-soon' element={<CommingSoon />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

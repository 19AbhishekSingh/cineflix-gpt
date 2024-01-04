import React from 'react'

import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'

const VideoBackground = ({movieId}) => {
 
    const trailerVideoDetails  = useSelector(store=>store.movies?.trailerVideos)
    //console.log('key' ,trailerVideoDetails?.key)
  
useMovieTrailer(movieId)
  return (
    <div className='w-screen'>
        <iframe 
        className='w w-screen aspect-video'
         src={"https://www.youtube.com/embed/"+ trailerVideoDetails?.key +"?&autoplay=1&mute=1"}
         title="YouTube video player"  
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         allowFullScreen>

         </iframe>
    </div>
  )
}

export default VideoBackground 
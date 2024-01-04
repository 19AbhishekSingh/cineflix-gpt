import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"
import { addTrailerVideo } from "../utils/moviesSlice"
import { useDispatch } from "react-redux"

const useMovieTrailer = (movieId) =>{
    const dispatch = useDispatch()
    const getMovieVideo = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId+'/videos?language=en-US', API_OPTIONS) 
        
        const json = await data.json() 
        //console.log(json)
        const findTrailer = json.results.find((video)=>video.type==="Trailer") 
        if (!findTrailer) {
            // No trailer found, return the first video in the results array
            return json.results[0];
          }
        //console.log(findTrailer)
        dispatch(addTrailerVideo(findTrailer))
        }
        useEffect(()=>{
        getMovieVideo()
        },[])
}

export default useMovieTrailer;
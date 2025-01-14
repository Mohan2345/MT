import React , { useState, useEffect } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useParams , useNavigate} from 'react-router-dom'

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const[apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTljZTAzZjc5YTE0YTJlZjMxMjdiMDJlMDc4MTQ0YiIsIm5iZiI6MTczNjc1OTkyMC42MTYsInN1YiI6IjY3ODRkYTcwYzVkMmU5NmUyNjdiYjJmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eunP818Hu122aIDLguIJ-naUzJuvg4YG5Yr48AplZMA'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  },[])
  
  
  fetch('https://api.themoviedb.org/3/movie/939243/videos?language=en-US', options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));


  return (
    <div className='player'>
      <img 
      src={back_arrow_icon} 
      onClick={() => navigate(-1)} 
      alt="Back Arrow Icon" />
      <iframe 
      height='90%'
      width='90%'
      src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameborder="0" allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player

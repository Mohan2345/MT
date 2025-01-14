import React, { useRef , useEffect, useState} from 'react'
import './Titlecards.css'
import { Link } from 'react-router-dom'
import cards_data from '../../assets/cards/Cards_data'


const Titlecards = ({title,category}) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTljZTAzZjc5YTE0YTJlZjMxMjdiMDJlMDc4MTQ0YiIsIm5iZiI6MTczNjc1OTkyMC42MTYsInN1YiI6IjY3ODRkYTcwYzVkMmU5NmUyNjdiYjJmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eunP818Hu122aIDLguIJ-naUzJuvg4YG5Yr48AplZMA'
    }
  };
  
  

const handleWheel = (e) =>
{
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY
}

useEffect(() => {
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));
  cardsRef.current.addEventListener('wheel',handleWheel)
}, [])
  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular On Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {
          apiData.map((card,index)=>{
            return <Link to={`/player/${card.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="Card Image" />
              <p>{card.original_title}</p>
            </Link>
          })
        }
      </div>
    </div>
  )
}

export default Titlecards

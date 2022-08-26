import { fetchHero } from '../movies/heroSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import addToWatchList from '../helpers/addToWatchList';

const HeroContainer = () => {
  const hero = useSelector(state => state.hero.hero);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHero());
  }, [])

  return (
    <div className="hero-container p-8" style={{backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0) 50%, rgba(17,17,17,1) 100%), url(http://image.tmdb.org/t/p/original${hero.backdrop_path})`}}>
      <h1 className='hero-title text-4xl font-bold mb-4'>{hero.title}</h1>
      <p className="hero-desc font-medium text-md mb-4">{hero.overview}</p>
      <div className="flex hero-button-wrapper">
        <button className="hero-button cursor-pointer font-bold rounded px-8 py-2 mr-2 text-black bg-white hover:bg-[#e6e6e6] transition-all">
          <a href={`/${hero.title ? 'movie' : 'tv'}/${hero.id}/${hero.title ? hero.title : hero.name}`}>
          Learn more
          </a>
        </button>
        <button onClick={() => addToWatchList(hero)} className="hero-button cursor-pointer font-bold rounded px-8 py-2 mr-2 text-black bg-white hover:bg-[#e6e6e6] transition-all">+ Add to Watchlist</button>
      </div>
    </div>
  )
}

export default HeroContainer;
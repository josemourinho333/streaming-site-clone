import { fetchHero } from '../movies/heroSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const HeroContainer = () => {
  const hero = useSelector(state => state.hero.hero);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHero());
  }, [])

  return (
    <div className="hero-container p-8" style={{backgroundImage: `url(http://image.tmdb.org/t/p/original${hero.backdrop_path})`}}>
      <h1 className='hero-title text-4xl font-bold mb-4'>{hero.title}</h1>
      <p className="hero-desc font-medium text-md mb-4">{hero.overview}</p>
      <div className="flex hero-button-wrapper">
        <button className="hero-button cursor-pointer font-bold rounded px-8 py-2 mr-2 text-black bg-white hover:bg-[#e6e6e6] transition-all">Button</button>
        <button className="hero-button cursor-pointer font-bold rounded px-8 py-2 mr-2 text-black bg-white hover:bg-[#e6e6e6] transition-all">+ Add to My List</button>
      </div>
    </div>
  )
}

export default HeroContainer;
const HeroContainer = (props) => {
  return (
    <div className="hero-container p-8" style={{backgroundImage: `url(http://image.tmdb.org/t/p/original${props.movie.backdrop_path})`}}>
      <h1 className='hero-title text-5xl font-bold mb-4'>{props.movie.title}</h1>
      <p className="hero-desc font-medium text-lg mb-4">{props.movie.overview}</p>
      <button className="hero-button cursor-pointer font-bold rounded px-8 py-2 mr-2 text-black bg-white hover:bg-[#e6e6e6] text-black transition-all">Button</button>
      <button className="hero-button cursor-pointer font-bold rounded px-8 py-2 mr-2 text-black bg-white hover:bg-[#e6e6e6] text-black transition-all">+ Add to My List</button>
    </div>
  )
}

export default HeroContainer;
const getGenresInMovie = (genreIds, all) => {
  const results = genreIds.map((genreId) => {
    const id = isNaN(genreId) ? genreId.id : genreId;
    const match = all?.find(item => item.id === id);
    return match;
  })

  return results;
}

export default getGenresInMovie;
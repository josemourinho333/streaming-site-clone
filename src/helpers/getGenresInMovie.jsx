const getGenresInMovie = (genreIds, all) => {
  const results = genreIds.map((genreId) => {
    const match = all.find(item => item.id === genreId);
    return match;
  })

  return results;
}

export default getGenresInMovie;
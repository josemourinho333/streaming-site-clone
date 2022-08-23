const getOfficialTrailer = (videosList) => {
  console.log('hello',videosList);
  if (videosList) {
    const trailerKey = videosList.filter((video) => video.name === 'Official Trailer');

    return trailerKey[0].key;
  }
};

export default getOfficialTrailer;
const getOfficialTrailer = (videosList) => {
  if (videosList) {
    const trailerKey = videosList.filter((video) => video.name.toLowerCase().includes('official trailer'));

    return trailerKey[0]?.key;
  }
};

export default getOfficialTrailer;
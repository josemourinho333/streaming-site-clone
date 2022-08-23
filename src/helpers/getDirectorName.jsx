const getDirectorName = (crewList) => {
  if (crewList) {
    const director = crewList?.filter((person) => person.job === 'Director');
    return director[0].name;
  }
};

export default getDirectorName;
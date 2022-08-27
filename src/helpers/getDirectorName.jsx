const getDirectorName = (crew, creators) => {
  if (!creators && crew) {
    const director = crew?.filter((person) => person.job === 'Director');
    return director[0].name;
  };

  if (creators) {
    const createdBy = creators?.map((creator) => creator.name);
    return createdBy.join(' & ');
  };

};

export default getDirectorName;
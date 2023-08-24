const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      character: [{}],
      planet: [{}],
      starship: [{}],
      favoritesList: [],
      singleCharacter: [{}],
      singlePlanet: [{}],
      singleStarship: [{}],
    },
    actions: {
      // Use getActions to call a function within a fuction
      getCharacter: () => {
        fetch("https://www.swapi.tech/api/people")
          .then((response) => response.json())
          .then((data) => setStore({ character: data.results }))
          .catch((err) => console.log(err));
      },
      getPlanet: () => {
        fetch("https://www.swapi.tech/api/planets")
          .then((response) => response.json())
          .then((data) => setStore({ planet: data.results }))
          .catch((err) => console.log(err));
      },
      getStarship: () => {
        fetch("https://www.swapi.tech/api/starships")
          .then((response) => response.json())
          .then((data) => setStore({ starship: data.results }))
          .catch((err) => console.log(err));
      },
      addFavorite: (nameFavorite) => {
        setStore({
          favoritesList: getStore().favoritesList.concat(nameFavorite),
        });
      },
      deleteFavorite: (nameFavorite) => {
        const store = getStore();
        const newList = store.favoritesList.filter(
          (item) => item !== nameFavorite
        );
        setStore({ favoritesList: newList });
      },
      singleCharacter: (idCharacter) => {
        fetch("https://www.swapi.tech/api/people/" + idCharacter)
          .then((response) => response.json())
          .then((data) => setStore({ singleCharacter: data.result.properties }))
          .catch((err) => console.log(err));
      },
      singlePlanet: (idPlanet) => {
        fetch("https://www.swapi.tech/api/planets/" + idPlanet)
          .then((response) => response.json())
          .then((data) => setStore({ singlePlanet: data.result.properties }))
          .catch((err) => console.log(err));
        console.log(idPlanet);
      },
      singleStarship: (idStarship) => {
        fetch("https://www.swapi.tech/api/starships" + idStarship)
          .then((response) => response.json())
          .then((data) => {
            const { properties } = data.result;
            setStore({ singleStarship: properties });
          })
          .catch((err) => console.log(err));
      },
    },
  };
};

export default getState;

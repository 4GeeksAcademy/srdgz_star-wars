const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      character: [{}],
      planet: [{}],
      starship: [{}],
      favoritesList: [],
      DetailCharacter: [{}],
      DetailPlanet: [{}],
      DetailStarship: [{}],
    },
    actions: {
      // Use getActions to call a function within a fuction
      getCharacters: () => {
        fetch("https://www.swapi.tech/api/people/")
          .then((response) => response.json())
          .then((data) => setStore({ character: data.results }))
          .catch((err) => console.log(err));
      },
      getPlanets: () => {
        fetch("https://www.swapi.tech/api/planets/")
          .then((response) => response.json())
          .then((data) => setStore({ planet: data.results }))
          .catch((err) => console.log(err));
      },
      getStarships: () => {
        fetch("https://www.swapi.tech/api/starships/")
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
      DetailCharacter: (idCharacter) => {
        fetch("https://www.swapi.tech/api/people/" + idCharacter)
          .then((response) => response.json())
          .then((data) => setStore({ DetailCharacter: data.result.properties }))
          .catch((err) => console.log(err));
      },
      DetailPlanet: (idPlanet) => {
        fetch("https://www.swapi.tech/api/planets/" + idPlanet)
          .then((response) => response.json())
          .then((data) => setStore({ DetailPlanet: data.result.properties }))
          .catch((err) => console.log(err));
      },
      DetailStarship: (idStarship) => {
        fetch("https://www.swapi.tech/api/starships/" + idStarship)
          .then((response) => response.json())
          .then((data) => setStore({ DetailStarship: data.result.properties }))
          .catch((err) => console.log(err));
      },
    },
  };
};

export default getState;

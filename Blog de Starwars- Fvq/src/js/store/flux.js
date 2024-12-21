const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favorites: [], //MIS FAV
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      addFavorite: (item) => {
        const store = getStore();
        if (!store.favorites.find(fav => fav.name === item.name)) { 
          setStore({ favorites: [...store.favorites, item] });
        }
      
      },

      removeFavorite: (uid) => { 
        const store = getStore();
        const updatedFavorites = store.favorites.filter(fav => fav.uid !== uid); 
        setStore({ favorites: updatedFavorites });
      },
      

      changeColor: (index, color) => {
        const store = getStore();

        // Loop through the demo array to find the item at the specified index
        // and change its background color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        // Update the store with the new demo array
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;

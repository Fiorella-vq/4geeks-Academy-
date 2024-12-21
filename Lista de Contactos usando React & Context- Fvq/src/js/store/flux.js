const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
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
		contacts: [],
	  },
	  actions: {
		// Use getActions to call a function within a fuction
		exampleFunction: () => {
		  getActions().changeColor(0, "green");
		},
		loadSomeData: () => {
		  /**
					  fetch().then().then(data => setStore({ "foo": data.bar }))
				  */
		},
		changeColor: (index, color) => {
		  //get the store
		  const store = getStore();
  
		  //we have to loop the entire demo array to look for the respective index
		  //and change its color
		  const demo = store.demo.map((elm, i) => {
			if (i === index) elm.background = color;
			return elm;
		  });
  
		  //reset the global store
		  setStore({ demo: demo });
		},
  
		// función para crear una agenda de contactos inicial en la DB
		createAgenda: () => {
		  const myHeaders = new Headers();
		  const resp = fetch(process.env.BACKEND_URL + "agendas/fiorellaviquag", {
			// Process permite acceder a las variables de entorno en .env
			method: "POST",
		  });
		},
		// función para crear 3 contactos iniciales en la DB
		createFirstsContacts: async () => {
		  const response = await fetch(
			process.env.BACKEND_URL + "agendas/fiorellaviquag/"
		  );
		  const data = await response.json();
		  if (data.contacts == "") {
			const myHeaders = new Headers();
			myHeaders.append("Content-Type", "application/json");
			const resp1 = await fetch(
			  process.env.BACKEND_URL + "agendas/fiorellaviquag/contacts",
			  {
				// Process permite acceder a las variables de entorno en .env
				method: "POST",
				headers: myHeaders,
				body: JSON.stringify({
				  name: "",
				  phone: "",
				  email: "",
				  address: "",
				}),
			  }
			);
			const resp2 = await fetch(
			  process.env.BACKEND_URL + "agendas/fiorellaviquag/contacts",
			  {
				// Process permite acceder a las variables de entorno en .env
				method: "POST",
				headers: myHeaders,
				body: JSON.stringify({
				  name: "",
				  phone: "",
				  email: "",
				  address: "",
				}),
			  }
			);
			const resp3 = await fetch(
			  process.env.BACKEND_URL +
				"agendasfiorellaviquag/fiorellaviquag/contacts",
			  {
				// Process permite acceder a las variables de entorno en .env
				method: "POST",
				headers: myHeaders,
				body: JSON.stringify({
				  name: "",
				  phone: "",
				  email: "",
				  address: "",
				}),
			  }
			);
		  }
		},
  
		// función para importar contactos
		getContacts: async () => {
		  const resp = await fetch(
			process.env.BACKEND_URL + "agendas/fiorellaviquag/"
		  );
		  // Process permite acceder a las variables de entorno en .env
		  if (!resp.ok) {
			await getActions().createAgenda();
			await getActions().createFirstsContacts();
		  }
		  const data = await resp.json();
		  console.log(data);
		  setStore({ contacts: data.contacts }); // esto permite actualizar los contactos
		},
  
		// función para enviar nuevos contactos creados a la DB
		createContact: async (newContact) => {
		  const myHeaders = new Headers();
		  myHeaders.append("Content-Type", "application/json");
		  const resp = await fetch(
			process.env.BACKEND_URL + "agendas/fiorellaviquag/contacts",
			{
			  // Process permite acceder a las variables de entorno en .env
			  method: "POST",
			  headers: myHeaders,
			  body: JSON.stringify(newContact),
			}
		  );
		  if (resp.ok) {
			await getActions().getContacts();
		  }
		},
  
		// función para eliminar contactos
		deleteContact: async (contactId) => {
		  const resp = await fetch(
			process.env.BACKEND_URL +
			  `agendas/fiorellaviquag/contacts/${contactId}`,
			{
			  method: "DELETE",
			}
		  );
		  if (resp.ok) {
			await getActions().getContacts();
		  }
		},
  
		// función para editar contactos
		editContact: async (contactId, updatedContact) => {
		  const myHeaders = new Headers();
		  myHeaders.append("Content-Type", "application/json");
		  const resp = await fetch(
			process.env.BACKEND_URL +
			  `agendas/fiorellaviquag/contacts/${contactId}`,
			{
			  method: "PUT",
			  headers: myHeaders,
			  body: JSON.stringify(updatedContact),
			}
		  );
		  if (resp.ok) {
			await getActions().getContacts();
		  }
		},
	  },
	};
  };
  
  export default getState;
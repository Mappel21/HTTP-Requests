const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
				listTitle: "No Title",
				todoList: [],
				checkItem: ""
		},
		actions: {
			getTodo: { =>{
				fetch('https://assets.breatheco.de/apis/fake/todos/user/mappel21').then
			},
			addTitle: title =>(title === "" ? setStore({listTitle: "No title"}) : setStore({ listTitle: title}))
		}
	};
};

export default getState;

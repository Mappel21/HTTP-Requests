const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			listTitle: "Todo List",
			todoList: [],
			checkItem: ""
		},
		actions: {
			getTodo: () => {
				fetch("https://assets.breatheco.de/apis/fake/todos/user/mappel21")
					.then(res => res.json())
					.then(response => getStore(setStore({ todoList: response })));
			},
			addTodo: todo => {
				let list = getStore().todoList;
				let newItem = [{ label: todo, done: false }];
				list = [...list, ...newItem];
				console.log("todo", list);
				fetch("https://assets.breatheco.de/apis/fake/todos/user/mappel21", {
					method: "PUT",
					body: JSON.stringify(list),
					headers: {
						"Content-Type": "application/json"
					}
				}).then(() => getActions().getTodo());
			},
			modifyTodo: element => {
				// let modify = getStore().todoList;
				// modify[index] = { label: element, done: false };
				fetch("https://assets.breatheco.de/apis/fake/todos/user/mappel21", {
					method: "PUT",
					body: JSON.stringify(element),
					headers: {
						"Content-Type": "application/json"
					}
				}).then(() => getActions().getTodo());
			},
			deleteItem: array => {
				fetch("https://assets.breatheco.de/apis/fake/todos/user/mappel21", {
					method: "PUT",
					body: JSON.stringify(array),
					headers: {
						"Content-Type": "application/json"
					}
				}).then(() => getActions().getTodo());
			}

			// addTitle: title =>(title === "" ? setStore({listTitle: "No title"}) : setStore({ listTitle: title}))
		}
	};
};

export default getState;

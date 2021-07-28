const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
				listTitle: "Todo List",
				todoList: [],
				checkItem: ""
		},
		actions: {
			getTodo: () =>{
				fetch('https://assets.breatheco.de/apis/fake/todos/user/mappel21')
				.then(res => res.json())
				.then(response => setStore({ todos: response }));
			},
			addTodo: todo => {
				fetch('https://assets.breatheco.de/apis/fake/todos/user/mappel21'),{
					method; "put"
					body: JSON.stringify(todo),
					headers: {
						"Content-Type": "application/json"
				}
				todo = [...getStore().data, todo];
				console.log("todo", todo);
			}

			// addTitle: title =>(title === "" ? setStore({listTitle: "No title"}) : setStore({ listTitle: title}))
			
		}
	};
};

export default getState;

import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import Todo from "../component/todo";

//create your first component
export function Home() {
	const [todo, setTodo] = useState("");
	const { store, actions } = useContext(Context);
	const [modify, setModify] = useState({ state: false, i: undefined });

	return (
		<div className="text-center mt-5">
			<h1>To-Do List</h1>
			<input
				value={todo}
				className="input"
				placeholder="What needs to be done?"
				onChange={e => setTodo(e.target.value)}
			/>
			<button
				onClick={() => {
					// setList([...list, todo]);
					actions.addTodo(todo);
					setTodo("");
				}}
				className="btn btn-success m-2">
				Add
			</button>
			{store.todoList.map((item, index) => (
				<div key={index}>
					{/* {item.label} */}
					<Todo item={item} index={index} />
					<button onClick={() => actions.deleteItem(store.todoList.filter(word => word !== item))}>
						<i className="fas fa-window-close" />
					</button>
				</div>
			))}
			{/* <footer>{list.length + " items left"}</footer> */}
		</div>
	);
}

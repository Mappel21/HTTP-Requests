import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

const Todo = ({ item, index }) => {
	const { store, actions } = useContext(Context);
	const [edit, setEdit] = useState(false);
	const [update, setUpdate] = useState("");
	return (
		<div>
			<div className="text-center mt-5">
				{!edit ? (
					`${index + 1}- ${item.label}`
				) : (
					<div>
						<input placeholder={item.label} onChange={e => setUpdate(e.target.value)} value={update} />
					</div>
				)}
				{!edit ? (
					<button onClick={() => setEdit(true)}>
						<i className="fas fa-edit" />
					</button>
				) : (
					<button
						onClick={() => {
							let updateTask = store.todoList;
							updateTask[index] = { label: update, done: false };
							actions.modifyTodo(updateTask);
							setEdit(false);
							setUpdate("");
						}}>
						<i className="fas fa-clipboard-check" />
					</button>
				)}
			</div>
		</div>
	);
};

Todo.propTypes = {
	item: PropTypes.object,
	index: PropTypes.number
};
export default Todo;

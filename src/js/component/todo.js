import React, {useState, useContext}from "react";
import { Context } from "../store/appContext";

const todo = () => {
    const{store, actions} = useContext(Context);
    const[edit, setEdit] = useState(false);
    const[update, setUpdate] = useState("");
    return(
        <div>
            <div className="text-center mt-5">
                {!edit ? (
                    `${index + 1} `
                )}
            </div>
        </div>
    ) 
}
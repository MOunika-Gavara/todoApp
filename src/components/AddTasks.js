import { useState, useEffect } from "react"
import { AppBar, Toolbar, Typography, TextField, Button, Box } from "@mui/material";
import { auth } from "../Firebase";
import { db } from "../Firebase";
import { collection, addDoc, query, onSnapshot, updateDoc, doc } from "firebase/firestore";

import ListTasks from "./ListTasks";

const AddTasks = () => {
    const [taskInput, setTaskInput] = useState("");
    const [taskList, setTaskList] = useState([]);

    const createTaskHandler = async (e) => {
        e.preventDefault(e);
        await addDoc(collection(db, 'tasks'), {
            task: taskInput,
            status: false,
        });
        setTaskInput('');
    };

    useEffect(() => {

        const q = query(collection(db, 'tasks'));

        const unsub = onSnapshot(q, (querySnapshot) => {
            let todoTasks = [];
            querySnapshot.forEach((doc) => {
                todoTasks.push({ ...doc.data(), id: doc.id });
            });
            setTaskList(todoTasks);
        });
        return () => unsub();

    }, []);


    console.log(taskList, "taskListtt");

    const todoStatus = async (todo) => {
        await updateDoc(doc(db, 'tasks', todo.id), {
            status: !todo.status,
        });
    };


    const taskHandler = (event) => {
        setTaskInput(event.target.value);
    }

    return (
        <div>
            <AppBar style={{ backgroundColor: "black" }}>
                <Toolbar>
                    <Typography><strong>To-Do App</strong></Typography>
                    <Box style={{ marginLeft: 1000, }}>
                        <Button
                            style={{ color: "white" }}
                            variant="contained"
                            onClick={() => auth.signOut()}>Sign Out</Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <form onSubmit={createTaskHandler}>
                <TextField
                    value={taskInput}
                    style={{ marginTop: 150 }}
                    placeholder="enter you task..."
                    onChange={taskHandler}
                >
                </TextField>
                <Button
                    style={{ marginTop: 160, backgroundColor: "black" }}
                    variant="contained"
                    onClick={createTaskHandler}>Add</Button>
                <ListTasks
                    taskList={taskList}
                    taskStatus={todoStatus}
                />
            </form>

        </div>

    )
}
export default AddTasks;


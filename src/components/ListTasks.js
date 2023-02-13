import React from "react";
import { Grid, Checkbox, FormControlLabel, Toolbar, Typography, Card, List, ListItemText } from "@mui/material";
import Check from "@mui/icons-material/Check";


const ListTasks = (props) => {

    // const [completedTasks, setCompletedTasks] = useState([]);
    // const [pendingTasks, setPendingTasks] = useState([]);
    // console.log(value, "aaaa")
    // console.log(props.taskStatus, "listttt");

    // const handleCheck = event => {
    //     const { name, checked } = event.target;
    //     console.log(name, "bbbb")
    //     if (checked === true) {
    //         setCompletedTasks(prev => [...prev, name]);
    //     } else {
    //         setCompletedTasks(completedTasks.filter((n) => n !== name));
    //     }
    //     console.log(completedTasks, "completed")
    //     if (checked === false) {
    //         setPendingTasks((prev) => [...prev, completedTasks.filter((n) => n === name)])
    //     }
    //     console.log(pendingTasks, "pending")
    // }


    // const filteredTasks = value.filter((n) => n.name !== pendingTasks.name);
    // console.log(filteredTasks, "kkkk");


    return (
        <div>
            <Grid
                container
                sx={{ marginLeft: 5, marginTop: 10 }}>
                <Card sx={{ width: 300, height: 300, textAlign: "left", marginLeft: 10, flexDirection: "row" }} elevation={8}>
                    <Toolbar style={{ backgroundColor: "black" }}>
                        <Typography style={{ color: "white" }}>To-Do Tasks</Typography>
                    </Toolbar>
                    {props.taskList.map((item) => (
                        <div >
                            <FormControlLabel
                                control={<Checkbox
                                    style={{ marginLeft: 20 }}
                                    color="primary"
                                    onChange={() => props.taskStatus(item)}
                                    type='checkbox'
                                    checked={item.status ? 'checked' : ''} />} />
                            {item.task}
                        </div>
                    ))}
                </Card>

                <Card sx={{ width: 300, height: 300, justifyItem: "center", marginLeft: 10 }} elevation={8}>
                    <Toolbar style={{ backgroundColor: "black" }}>
                        <Typography style={{ color: "white" }}>Pending Tasks</Typography>
                    </Toolbar>
                    <div>
                        <List style={{ paddingLeft: 10 }}>
                            <div>
                                {props.taskList.map((pending) => (
                                    !pending.status && <ListItemText style={{ textAlign: "left" }}>
                                        {pending.task}
                                    </ListItemText>
                                ))}
                            </div>

                        </List>
                    </div>
                </Card>
                <Card sx={{ width: 300, height: 300, justifyItem: "center", marginLeft: 10 }} elevation={8}>
                    <Toolbar style={{ backgroundColor: "black" }}>
                        <Typography style={{ color: "white" }}>Completed Tasks</Typography>
                    </Toolbar>
                    <div>
                        <List style={{ paddingLeft: 10 }}>
                            {props.taskList.map((complete) => (
                                complete.status && <ListItemText style={{ textAlign: "left" }}
                                >{complete.task}
                                    <Check style={{ color: "green" }}></Check>
                                </ListItemText>
                            ))}
                        </List>
                    </div>
                </Card>
            </Grid>
        </div>
    )
}

export default ListTasks;


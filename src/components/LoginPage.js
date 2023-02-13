import { useState } from "react";
import { AppBar, TextField, Toolbar, Typography } from "@mui/material";
import { Card, Button, Grid } from "@mui/material";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";

const LoginPage = () => {
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");

    const emailHandler = (event) => {
        setEnteredEmail(event.target.value);
    }

    const passwordHandler = (event) => {
        setEnteredPassword(event.target.value);
    }

    const signUp = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword);
            console.log(user);
        } catch (error) {
            console.log(error);
        }
    }

    const signIn = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, enteredEmail, enteredPassword);
            console.log(user);
        } catch (error) {
            console.log(error);
        }

    }



    return (
        <div>
            <AppBar style={{ backgroundColor: "black" }}>
                <Toolbar>
                    <Typography><strong>TO-DO App</strong></Typography>
                </Toolbar>
            </AppBar>
            <form>
                <Grid style={{ marginLeft: 460, marginRight: 460 }}>
                    <Card style={{ marginTop: 200 }} elevation={8}>
                        <TextField style={{ marginTop: 20 }}
                            type="email"
                            label="Email"
                            placeholder="EmailId"
                            value={enteredEmail}
                            onChange={emailHandler}>
                        </TextField><br /><br />
                        <TextField
                            type="password"
                            label="Password"
                            placeholder="password"
                            value={enteredPassword}
                            onChange={passwordHandler}>
                        </TextField><br /><br />
                        <div style={{ marginTop: 20, marginBottom: 10 }}>
                            <Button
                                style={{ backgroundColor: "black" }}
                                variant="contained"
                                onClick={(e) => signIn(e)}>Sign In</Button>
                            <Button style={{ marginLeft: 150, backgroundColor: "black" }}
                                variant="contained"
                                onClick={(e) => signUp(e)}>Sign Up</Button>
                        </div>
                    </Card>
                </Grid>
            </form>
        </div>
    )
}
export default LoginPage;
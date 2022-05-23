import React, { useState } from "react"
import { LoginContainer } from "./styled"
import useForm from '../../hooks/useForm'
import { Button, CircularProgress } from '@material-ui/core';
import { TextFieldStyled } from "./styled";
import { MainStyle} from "../../styled-app"
import {goToMainPage} from "../../routes/coordinator"
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [form, onChange, clear] = useForm({ email: "", password: "" })
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const onSubmitLogin = (event) => {
        event.preventDefault();
        //TODO verify login
        goToMainPage(navigate)
    };
    const onSignup = (event) => {
        //TODO verify login
    };

    return (
        <MainStyle>
            <LoginContainer>
                <h2>Login</h2>
                <form onSubmit={onSubmitLogin}>
                    <TextFieldStyled
                        label="Email"
                        variant="outlined"
                        name="email"
                        value={form.email}
                        onChange={onChange}
                        type="text"//TODO go back to email when finished
                        margin="normal"
                        required
                    />
                    <TextFieldStyled
                        label="Password"
                        variant="outlined"
                        name="password"
                        value={form.password}
                        onChange={onChange}
                        type="password"
                        margin="normal"
                        required
                    />
                    {isLoading && <CircularProgress />}
                    {!isLoading && <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        margin="normal"
                        onClick={() => { onSubmitLogin(); }}
                    >Login</Button>}
                </form>
            </LoginContainer>
            {/* TODO: create signup form */}
        </MainStyle>
    )
}


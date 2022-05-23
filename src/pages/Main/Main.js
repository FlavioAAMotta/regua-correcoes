import React from "react"
import { Button, CircularProgress } from '@material-ui/core';
import { MainStyle } from "../../styled-app"
import { SelectionContainer, ButtonsContainer } from "./styled"
import { useNavigate } from "react-router-dom";
import {goToCreateRulePage, goToUseRulePage} from "../../routes/coordinator"

export const Main = () => {
    const navigate = useNavigate()

    const onCreateRule = (event) => {
        goToCreateRulePage(navigate)
    };
    const onUseRule = (event) => {
        event.preventDefault();
        goToUseRulePage(navigate)
    };

    return (
        <MainStyle>
            <SelectionContainer>
                <h2>Select one</h2>
                <ButtonsContainer>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        margin="normal"
                        onClick={() => { onCreateRule(); }}
                    >Create Rule</Button>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        margin="normal"
                        onClick={() => { onUseRule(); }}
                    >Use Rule</Button>
                </ButtonsContainer>
            </SelectionContainer>
        </MainStyle>
    )
}
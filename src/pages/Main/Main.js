import React from "react"
import { Button, CircularProgress } from '@material-ui/core';
import { MainStyle } from "../../styled-app"
import { SelectionContainer, ButtonsContainer } from "./styled"

export const Main = () => {
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
                    >Create Rule</Button>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        margin="normal"
                    >Use Rule</Button>
                </ButtonsContainer>
            </SelectionContainer>
        </MainStyle>
    )
}
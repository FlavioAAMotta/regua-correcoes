import React from "react"
import { MainStyle } from "../../styled-app"
import { Button, CircularProgress } from '@material-ui/core';
import { FormRow } from "./styled";
import { useState } from "react";

export const CreateRule = () => {
    const [newRule, setNewRule] = useState(false)
    const [ruleName, setRuleName] = useState("")

    const handleNameChange = (event) => {
        setRuleName(event.target.value)
    }

    const createNewRule = () => {
        !ruleName && alert("Insert a name for your rule") 
        ruleName && setNewRule(true) // TODO: Insert Axios logic to insert rule
    }

    return (
        <MainStyle>
            <h2>Here you can create your check rule</h2>
            <form>
                <FormRow>
                    <input type="text" placeholder="Rule name" onChange={handleNameChange} value={ruleName} />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        margin="normal"
                        onClick={() => { createNewRule(); }}
                    >+</Button>
                </FormRow>
                {newRule && <FormRow>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        margin="normal"
                    >+</Button>
                </FormRow>}
            </form>
        </MainStyle>
    )
}
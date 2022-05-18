import React from "react"
import { MainStyle } from "../../styled-app"
import { Button } from '@material-ui/core';
import { FormRow } from "./styled";
import { useState, useEffect } from "react";

export const CreateRule = () => {
    const [newRule, setNewRule] = useState(false)
    const [newQuestion, setNewQuestion] = useState("")
    const [weight, setWeight] = useState(0)
    const [ruleName, setRuleName] = useState("")
    const [questions, setQuestions] = useState([])
    const [totalWeight, setTotalWeight] = useState(0)

    // useEffect(() =>{
    //     const initialWeight = 0
    //     const updatedTotalWeight = questions.reduce((previousQuestion, currentQuestion)=>
    //         previousQuestion.weight + currentQuestion.weight,initialWeight
    //     )
    //     setTotalWeight(updatedTotalWeight)
    // },[questions])

    const handleNameChange = (event) => {
        setRuleName(event.target.value)
    }

    const handleNewQuestionChange = (event) => {
        setNewQuestion(event.target.value)
    }

    const handleWeight = (event) => {
        setWeight(event.target.value)
    }

    const createNewRule = () => {
        !ruleName && alert("Insert a name for your rule")
        ruleName && setNewRule(true) // TODO: Insert Axios logic to insert rule
    }

    const createNewQuestion = () => {
        if (newQuestion && weight) {
            const questionCreated = (
                {
                    text: newQuestion,
                    weight: weight
                }
            )
            const updatedQuestions = [...questions, questionCreated]
            setTotalWeight(Number(totalWeight) + Number(weight))
            setQuestions(updatedQuestions)
            setNewQuestion("")
            setWeight(0)
        }else{
            alert("Please enter the question and its weight")
        }
    }

    const mappedQuestions = questions.map((question) => {
        return (
            <FormRow>
                <input value={question.text} disabled />
                <input value={question.weight} disabled />
            </FormRow>
        )
    })

    return (
        <MainStyle>
            <h2>Here you can create your check rule</h2>
            <form>
                <FormRow>
                    <input type="text" placeholder="Rule name" onChange={handleNameChange} value={ruleName} />
                    <Button
                        variant="contained"
                        color="primary"
                        margin="normal"
                        onClick={() => { createNewRule(); }}
                    >+</Button>
                </FormRow>
                {newRule && <FormRow>
                    <input type="text" placeholder="Question" onChange={handleNewQuestionChange} value={newQuestion} />
                    <input type="number" placeholder="Weight" onChange={handleWeight} value={weight} min="0" max="100" />
                </FormRow>}
                {newRule && <FormRow>
                    <Button
                        variant="contained"
                        color="primary"
                        margin="normal"
                        onClick={() => { createNewQuestion(); }}
                    >+</Button>
                </FormRow>}
                {newRule && mappedQuestions}
                <h3>Total Weight:</h3> {totalWeight}

            </form>
        </MainStyle>
    )
}
import React from "react"
import { Button, Input } from '@material-ui/core';
import { FormRow, CreateRuleStyle, Header, Form, FormRule, TotalWeight } from "./styled";
import { useState } from "react";

export const CreateRule = () => {
    const [newRule, setNewRule] = useState(false)
    const [newQuestion, setNewQuestion] = useState("")
    const [weight, setWeight] = useState(0)
    const [ruleName, setRuleName] = useState("")
    const [questions, setQuestions] = useState([])
    const [totalWeight, setTotalWeight] = useState(0)

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
    const removeCurrentRule = (questionToRemove) => {
        console.log("Remove:",questionToRemove)
        const questionsNotRemoved = questions.filter((question)=>{
            return question.text !== questionToRemove.text
        })
        console.log("questionsNotRemoved:",questionsNotRemoved)
        setTotalWeight(Number(totalWeight) - Number(questionToRemove.weight))
        setQuestions(questionsNotRemoved)
    }

    const submitRule = () =>{
        if(questions.length > 0){
            alert("TODO, enviar ao back")
        }else{
            alert("Favor criar ao menos uma questão")
        }
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
                <Input value={question.text} disabled />
                <Input value={question.weight} disabled />
                <Button
                        variant="contained"
                        color="primary"
                        margin="normal"
                        onClick={() => { removeCurrentRule(question); }}
                    >-</Button>
            </FormRow>
        )
    })

    return (
        <CreateRuleStyle>
            <Header>Here you can create your check rule</Header>
            <Form>
                <FormRule>
                    <Input type="text" placeholder="Rule name" onChange={handleNameChange} value={ruleName} style = {{width: '85%'}}/>
                    <Button
                        variant="contained"
                        color="primary"
                        margin="normal"
                        onClick={() => { createNewRule(); }}
                        style = {{width: '10%'}}
                    >+</Button>
                </FormRule>
                {newRule && <FormRow>
                    <input type="text" placeholder="Question" onChange={handleNewQuestionChange} value={newQuestion} />
                    <input type="number" placeholder="Weight" onChange={handleWeight} value={weight} min="0" max="100" />
                    <Button
                        variant="contained"
                        color="primary"
                        margin="normal"
                        onClick={() => { createNewQuestion(); }}
                    >+</Button>
                </FormRow>}
                {newRule && mappedQuestions}
                <TotalWeight>Total Weight: {totalWeight}</TotalWeight>
                {newRule && <FormRow>
                    <Button
                        variant="contained"
                        color="primary"
                        margin="normal"
                        onClick={() => { submitRule(); }}
                    >Submit Rule</Button>
                </FormRow>}

            </Form>
        </CreateRuleStyle>
    )
}
import styled from 'styled-components';
import { mainColor, lightBackground } from '../../constants/colors';
import { TextField } from '@material-ui/core';

export const CreateRuleStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const FormRow = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-around;
`

export const FormRule = styled.div`
    display: flex;
    align-self: center;
    width: 100%;
    margin: 16px;
    justify-content: space-between;
`

export const Header = styled.h1`
    margin: 16px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    width: 80%;
`
export const TotalWeight = styled.h3`
    display: flex;
    align-self: center;
`
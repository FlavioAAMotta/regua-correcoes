import styled from 'styled-components';
import { mainColor, lightBackground } from '../../constants/colors';

export const SelectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    width: 40vw;
    padding: 20px;
    border: 1px solid ${mainColor};
    border-radius: .5em;
    background-color: white;

@media (max-width: 480px) {
    width: 90vw;
}
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    Button{ 
        margin: 20px;
        padding: 8px;
        width: 100%;
    }
`
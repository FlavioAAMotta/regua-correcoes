import { useNavigate } from "react-router-dom";
import { goBack } from "../../routes/coordinator"
import { HeaderBar, HeaderButton} from "./styled"
import { Button } from '@material-ui/core';

export const Header = () => {

    const onBack = (event) => {
        goBack(navigate)
    };
    const navigate = useNavigate();

    return (
        <HeaderBar>
            <HeaderButton>
                <Button onClick={() => { onBack() }}>
                    Go back
                </Button>
            </HeaderButton>
        </HeaderBar>
    )
}
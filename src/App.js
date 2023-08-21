import { Fragment, useState } from "react";
import Form from './Componet/Form/Form';
import ErroModal from "./Componet/UI/ErrorModal";
import ButtonCart from "./Componet/Button/ButtonCart";

function App() {
    const [cartIsShow, setCartIsShow] = useState(false);
    const ShowCart = () => {
        setCartIsShow(true)
    }
    const CartHide = () => {
        setCartIsShow(false);
    }
    return (
        <Fragment>
            {cartIsShow && <ErroModal onHide={CartHide} />}
            <ButtonCart onShow={ShowCart}>Add To Cart</ButtonCart>
            <Form />
        </Fragment>
    )
}

export default App;

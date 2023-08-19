import { useState } from 'react';
import classes from './AddCart.module.css'
import Button from './Button';
const AddCart = (props) => {
    const [add, setAdd] = useState(false);
    const [close, setClose] = useState(false)
    const AddHandler = () => {
        setAdd(true);
    }
    const AddClose = () => {
        setClose(true);
        console.log(close)
    }
    return (
        <div className={classes.cart}>
            <h1>Add to cart</h1>
            <Button onClick={AddHandler} onClose={AddClose}>Add me</Button>
            {add && <h1> Welcome to this page</h1>}
            {close && <h2>Goodby see you</h2>}
        </div>
    )
}
export default AddCart;
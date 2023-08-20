import { Fragment } from "react";
import classes from './Cart.module.css'

const Cart = (props) => {
    return (
        <Fragment>
            <div className={classes.cart}>
                {props.children}

            </div>
        </Fragment>
    )
}
export default Cart;
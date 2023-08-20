import { Fragment } from 'react';
import Cart from '../Cart/Cart';
import classes from './Form.module.css'
const Form = (props) => {
    return (
        <Fragment>
            <Cart>
                <form className={classes.form}>
                    <input placeholder="Name" />
                    <input placeholder="Password" />



                </form>

            </Cart>
        </Fragment>
    )
}
export default Form;
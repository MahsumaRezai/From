import { Fragment } from 'react';
import Cart from '../Cart/Cart';
import classes from './Form.module.css'
import FormContact from './FormContact';
const Form = (props) => {
    return (
        <Fragment>
            <Cart>
                <FormContact/>
                <form className={classes.form}>
                    <input placeholder="Name" />
                    <input placeholder="Password" />



                </form>

            </Cart>
        </Fragment>
    )
}
export default Form;
import { Fragment } from 'react';
import Cart from '../Cart/Cart';
import classes from './Form.module.css'
import FormContact from './FormContact';
import Button from './Button';
const Form = (props) => {
    return (
        <Fragment>
            <Cart>
                <FormContact />
                <form className={classes.form}>
                    <input placeholder="Name" />
                    <input placeholder="Password" />
                    <Button>Sign In</Button>
                    <p>Do forget your password ?</p>
                </form>

            </Cart>
        </Fragment>
    )
}
export default Form;
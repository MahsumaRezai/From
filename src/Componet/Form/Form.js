import { Fragment, useState } from 'react';
import Cart from '../Cart/Cart';
import classes from './Form.module.css'
import FormContact from './FormContact';
import Button from './Button';



const Form = (props) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [namecheck, setNameCheck] = useState(false)


    const formHandler = (event) => {
        event.preventDefault();
        if (name.trim().length === 0) {
            setNameCheck(true)


        }
        if (password.trim().length > 10) {
            setNameCheck(true)
        }

    }
    const NameHandler = (event) => {
        setName(event.target.value)

    }
    const PasswordHandler = (event) => {
        setPassword(event.target.value);

    }
    return (
        <Fragment>
            <Cart>
                <FormContact />
                <form className={classes.form} onSubmit={formHandler}>
                    <input placeholder="Name" onChange={NameHandler} name="name" />
                    {namecheck && <span className="para">This flied is requried</span>}
                    <input placeholder="Password" onChange={PasswordHandler} />
                    {namecheck && <span className="para">This flied is requried</span>}


                    <Button>Sign In</Button>
                    <span className="textpara">Do forget your password ?</span>
                </form>

            </Cart>
        </Fragment>
    )
}
export default Form;
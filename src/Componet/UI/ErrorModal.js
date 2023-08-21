
import ReactDom from 'react-dom';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';
import { Fragment } from 'react';
const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onHide} />
}
const Modaloerlay = (props) => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h1>Welcome</h1>
            </header>
            <div className={classes.content}>
                <p>
                    Hello I am Masoumeh Rezai and I Love Coding
                </p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onHide}>Okay</Button>
            </footer>
        </Card>
    )
}
const ErroModal = (props) => {
    return (
        <Fragment>
            {ReactDom.createPortal(<Backdrop onHide={props.onHide} />, document.getElementById('backdrop-root'))}
            {ReactDom.createPortal(<Modaloerlay />,
                document.getElementById('overlay-root'))}
        </Fragment>
    )
}

export default ErroModal;
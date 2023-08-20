import { Fragment } from "react";
import classes from './Module.module.css';
import ReactDom from 'react-dom'

const Backdrop = () => {
    return (
        <div className={classes.drop}>

        </div>
    )

}
const ModuleOverly = (props) => {
    return (
        <div className={classes.module}>



        </div>
    )
}






const Module = (props) => {
    return (
        <Fragment>
            {ReactDom.createPortal(<Backdrop />, document.getElementById())}
            {ReactDom.createPortal(<Module></Module>,document.getElementById())}

        </Fragment>
    )
}
export default Module;
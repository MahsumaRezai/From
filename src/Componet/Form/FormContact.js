import img from '../image/img.jpg';
import classes from './Form.module.css'

const FormContact = (props) => {
    return (
        <div className={classes.content}>
            <img src={img} alt className={classes.img} />
            <h1 className={classes.title}>User Login</h1>

        </div>
    )
}
export default FormContact;
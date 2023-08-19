import classes from './AddCart.module.css'
import Button from './Button';
const AddCart = (props) => {
    return (
        <div className={classes.cart}>
            <h1>Add to cart</h1>
            <Button>Add me</Button>


        </div>
    )
}
export default AddCart;
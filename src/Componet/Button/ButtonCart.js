const ButtonCart = (props) => {
    return (
        <div className='content'>
            <button className='btnn' onClick={props.onShow}>{props.children}</button>

        </div>
    )
}
export default ButtonCart;
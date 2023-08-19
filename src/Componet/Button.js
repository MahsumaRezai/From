const Button = (props) => {
    return (
        <div >
            <button className="btn" onMouseOver={props.onClick} onMouseOut={props.onClose}>
                {props.children}
            </button>
        </div>
    )
}
export default Button;

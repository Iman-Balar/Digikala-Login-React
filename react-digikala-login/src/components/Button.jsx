const Button = (props) => {
    return (
        <button {...props} className={`w-100 btn btn-danger ${props.className}`}>{props.children}</button>
    )
}

export default Button
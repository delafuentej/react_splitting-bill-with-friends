

const CustomButton = ({children, handleClick}) => {
    return(
        <button className="button"
        onClick={handleClick}
        >
            {children}
        </button>
    )
}

export default CustomButton;
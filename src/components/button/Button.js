function Button({ text, colour }) {
    return (
        <>
            <button className={colour}>
                {text}
            </button>
        </>
    )
}
export default Button;
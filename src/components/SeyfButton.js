const SeyfButton = (props) => {
    const classes = `Button ${props.color ? "Button" + props.color : ''} ${props.className ? props.className : ""}`;
    return (
        <button className={classes}>
            {props.children}
        </button>
    )
}
export default SeyfButton;
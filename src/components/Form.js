const FormItem = (props) => {
    const classes = `${props.className ? props.className : ""}`;
    if(props.icon){
        const iclasses = `${props.inputclassName ? props.inputclassName : ""}`;
        return (
            <div className="FormItemWIcon">
                <label>{props.label}</label>
                <div className="FormItemIcon">
                    <i className={props.icon}></i>
                    <input type={props.type} name={props.name} className={iclasses} />
                </div>
            </div>
        )
    }else{
        return (<div className="FormItem">
            <label>{props.label}</label>
            <input type={props.type} name={props.name} />
        </div>)
    }
}

const SelectBox = (props) => {
    const classes = `${props.className ? props.className : ""}`;
    return (
        <select className="FormItem">
            {props.children}
        </select>
    )

}
const SelectOption = (props) => {
    const classes = `${props.className ? props.className : ""}`;
    return (
        <option className="FormItemOption" value={props.value}>
            {props.children}
        </option>
    )

}
export { FormItem, SelectBox, SelectOption };
export default FormItem;
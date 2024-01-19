import { useState } from 'react';

const AlertBox = (props) => {
  const [isActive, setIsActive] = useState(false);
  const handleAlertBoxClick = () => {
      setIsActive(s => !s);
  }
    const displayState = {
      display: isActive ? 'none' : 'block',
    };

    const classes = `AlertBox ${props.color ? "AlertBox" + props.color : ''} ${props.className ? props.className : ""}`;
    return (
        <div className={classes} style={displayState}>
            <span>{props.children}</span>
            <span className="AlertBoxClose" onClick={handleAlertBoxClick}><i class="fa-regular fa-close"></i></span>
        </div>
    )
}
export default AlertBox;
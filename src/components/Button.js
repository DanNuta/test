import style from "../css/Button.module.scss";

const Button = (props) => {

    return ( 
        <button className={`${style.btn} ${props.className}`} onClick={props.onClick}>{props.nume}</button>
     );
}
 
export default Button;
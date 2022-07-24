import style from "../css/Input.module.scss";

const Input = (props) => {

    return ( 
        <input className={`${style.input} ${props.className}`} type={props.type} placeholder={props.placeholder} onChange={props.onChange} value={props.value} />
     );
}
 
export default Input;
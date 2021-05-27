
import s from "./TextError.module.css"


const TextError = (props) => {
    return <span className={s.error}>
        {props.children}
    </span>
}



export default TextError;
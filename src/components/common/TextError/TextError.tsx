import React from "react";
import s from "./TextError.module.scss"


const TextError: React.FC<any> = ({ children }) => { 
    return <span className={s.error}>
        {children}
    </span>
}

export default TextError;
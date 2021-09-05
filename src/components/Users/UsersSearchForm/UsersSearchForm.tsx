import { FC, useState } from "react";
import s from "./UsersSearchForm.module.scss"

type PropsType = {
    setFindValue: (val: string) => void
    setCurrentPage: (val: number) => void
    setIsSubscribed: (val: boolean) => void
}

const UsersSearchForm: FC<PropsType> = ({setFindValue, setCurrentPage, setIsSubscribed}) => {

    const [term, setTerm] = useState("")
    

    const onChangeTerm= (e: any) =>{
        setTerm(e.target.value)
    }

    const findUsers = () => { 
        setFindValue(term)
        setCurrentPage(1)
    }

    const onclickSubscribesOnly = (e: any) => {
        setIsSubscribed(e.target.checked)
    }
    
    return <div className={s.searchWrapper}>
        <input type="text" name="term" className={s.searchField} value={term} onChange={onChangeTerm}/>
        <button className={s.searchButton} onClick={findUsers}  > Find User</button>

        <div className={s.checkboxBlock}>
            <label htmlFor="subscribe" className={s.label}> Subscribes only:</label>
            <input type="checkbox" name="subscribe" id="subscribe" onClick={onclickSubscribesOnly}/>
            <label htmlFor="subscribe" className={s.toggle }><span></span></label>
        </div>
    </div>
}
export default UsersSearchForm
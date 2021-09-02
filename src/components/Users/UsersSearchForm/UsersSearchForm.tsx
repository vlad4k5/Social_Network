import { FC, useState } from "react";
import s from "./UsersSearchForm.module.scss"

type PropsType = {
    setFindValue: (value: string) => void
    setCurrentPage: (val: number) => void
}

const UsersSearchForm: FC<PropsType> = ({setFindValue, setCurrentPage}) => {
    const [term, setTerm] = useState("")

    const onChangeTerm= (e: any) =>{
        setTerm(e.target.value)
    }

    const findUsers = () => { 
        setFindValue(term)
        setCurrentPage(1)
    }
    
    return <div>
        <input type="text" name="term" className={s.searchField} value={term} onChange={onChangeTerm}/>
        <button className={s.searchButton} onClick={findUsers}  > Find User</button><br />
            <br />
    </div>
            

}


export default UsersSearchForm
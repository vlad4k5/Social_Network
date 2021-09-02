import preloaderImg from "../../../assets/images/preloader.gif";
import s from "./Preloader.module.scss";

const Preloader = () => {
    return <div className={s.preloaderBlock}>
        <img src={preloaderImg} alt="Preloader"></img>
        </div>
}

export default Preloader;
import { Link } from "react-router-dom";
import style from "./NavBar.module.css"

export default function NavBar() {
  return (
    <div className={style.containerNav}>
      <div className={style.contentLinks}>
         <Link to="/home"  className={style.buttons}>HOME</Link>
         <Link to="/create"  className={style.buttons}>Create an Activity</Link>
      </div>
    </div>
  )
}

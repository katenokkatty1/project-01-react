import { NavLink } from "react-router-dom";
import s from "./NavBar.module.css";
import clsx from "clsx";
import { ROUTES as R } from "../../share/routes";
import { useCount } from "../../hooks/useCount";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  clsx(s.link, isActive && s.active);

export default function NavBar() {
  const {count, increment, decrement, clear}=useCount();
  return (
    <nav className={s.container}>
      <span>
        <div>{count}</div>
        <button type="button" onClick={()=>increment(1)}>
        +1
      </button>
      <button type="button" onClick={()=>decrement(1)}>
        -1
      </button>
      <button type="button" onClick={clear}>
        clear
      </button>
      </span>
      <NavLink to={R.HOME} className={navLinkClass}>Home</NavLink>
        <NavLink to={R.PRODUCTS} className={navLinkClass}>Products</NavLink>
        <NavLink to={R.CREATE_CATEGORY} className={navLinkClass}>Create Category</NavLink>
        <NavLink to={R.USERS} className={navLinkClass}>Users</NavLink>
      <NavLink to={R.COUNTER} className={navLinkClass}>Counter</NavLink>
      <NavLink to={R.GENDER_REVEAL} className={navLinkClass}>Gender Reveal</NavLink>
      <NavLink to={R.NATIONAL_REVEAL} className={navLinkClass}>Nationalize</NavLink>
      <NavLink to={R.SPACE_MISSION} className={navLinkClass}>Space Mission</NavLink>
      <NavLink to={R.IDEAL_WEIGHT} className={navLinkClass}>Ideal Weight Calculator</NavLink>
      <NavLink to={R.ABOUT} className={navLinkClass}>About</NavLink>
      <NavLink to={R.PROFILE} className={navLinkClass}>Profile</NavLink>
      <NavLink to={R.CONTACTS} className={navLinkClass}>Contact</NavLink>
      <NavLink to={R.SIGNUP} className={navLinkClass}>Sign Up</NavLink>
      <NavLink to={R.SIGNIN} className={navLinkClass}>Sign In</NavLink>
   
    </nav>
  );
}
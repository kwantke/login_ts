import "./Header.css";
import LogoAndSearchBoxAndUser from "./LogoAndSearchBoxAndUser";
import NavBar from "./NavBar";
import {useAppSelector} from "../../module/redux/hooks";

interface propTypes{
  userId: string
}
export default function Header(

){
  const {userId, img, isAuthenticated} = useAppSelector(state => state.user);
  console.log(userId+" "+ img+" " +isAuthenticated)
  return (
      <header>
        <div className="nav container">
          <LogoAndSearchBoxAndUser
            userId ={userId}
            img = {img}
          />
          <NavBar/>
        </div>
      </header>
  )
}
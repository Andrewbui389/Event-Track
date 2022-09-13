import { Link } from "react-router-dom";

export default function LeftSideNav({leftSideItems}){
    return(
    <div className="leftSideNav">
        <ul className="leftsidenav">
            <Link to='/'>Home</Link>
            {leftSideItems}
        </ul>    
    </div>
    );
}
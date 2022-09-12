import { Link } from "react-router-dom";

export default function LeftSideNav({leftSideItems}){
    return(
    <div style={{padding: "5px", width: "20vw"}}>
        <ul className="leftsidenav">
            <Link to='/'>Home</Link>
            {leftSideItems}
        </ul>    
    </div>
    );
}